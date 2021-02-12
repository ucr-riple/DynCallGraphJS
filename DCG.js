(function () {
        //Datastructure Listing
        var callerToCallee = Object.create(null); // Caller name@location => Callee name@location
        var iidToFunName = Object.create(null); // Function iid => Function name
        var calleeToCallingLoc = Object.create(null); // Callee iid => Calling Loc iid
        var callStack = []; //Sequence of active calls
        var applyStack = []
        var setterGetter= []; //Sequence of active setters and getters
        var jsonCallList={}; //JSON output

        //Variable Listing
        var objGetOwnPropDesc = Object.getOwnPropertyDescriptor;
        var objGetPrototypeOf = Object.getPrototypeOf;
        var isBrowser = J$.Constants.isBrowser;
        var callerIid = "";
        var calleeIid = "";
        var calleeIids = "";
        var format = /(?!\()(\S+\.js)\:([0-9]+\:[0-9]+\:[0-9]+\:[0-9]+)\)/gi;

        var SPECIAL_PROP_SID = J$.Constants.SPECIAL_PROP_SID;
        var SPECIAL_PROP_IID = J$.Constants.SPECIAL_PROP_IID;
        function getPropSafe(base, prop){
                if(base === null || base === undefined){
                  return undefined;
                }
                return base[prop];
              }          
        /**
         * @desc Given an object and property, it returns if the property is a getter
         * @param {object} obj - Base object
         * @param {string} prop - Property
         * @returns {string} desc - The descriptor for the property
         */
        function getPropertyDescriptor(o , prop ) {
                var t = o;
                while (t != null) {
                    var desc = objGetOwnPropDesc(t, prop);
                    if (desc) {
                        return desc;
                    }
                    t = objGetPrototypeOf(t);
                }
                
                return null;
            }
        /**
         * @desc Given an object and property, it identifies if the property is a getter
         * @param {object} obj - Base object
         * @param {string} prop - Property
         * @returns {boolean} - True/False identicating if getter or not
         */
        function isGetter( obj, prop){
                var desc = getPropertyDescriptor(obj,prop);
                return desc && (desc.get !== undefined);
            }
        /**
         * @desc Given an object and property, it identifies if the property is a setter
         * @param {object} obj - Base object
         * @param {string} prop - Property
         * @returns {boolean} - True/False identicating if setter or not
         */
        function isSetter( obj, prop){
                var desc = getPropertyDescriptor(obj,prop);
                return desc && (desc.set !== undefined);
            }
        /**
         * @desc Given a global instruction identifier, it returns a string containing 
         * the script name, begin and end line numbers and column 
         * Example: (ScriptName@beginLineNumber:beginColumnNumber:endLineNumber:endColumnNumber)
         * @param {number} giid - Static unique instruction identifier of this callback
         * @returns {string} final - The customised location of an instruction identifier
         */
        function getLoc(giid) {
                var loc = J$.iidToLocation(giid);
                return loc;
                /*var locIid = "";
                try{
                        locIid = format.exec(loc);
                        format.lastIndex = 0;
                        return locIid[1].replace("(",":")+"@"+locIid[2];
                }
                catch(e){
                        console.log("Unsupported format: " +loc)
                        return;
                }*/
        }
        J$.analysis = {

                /**
                 * @desc Pushes the script identifier onto the CallStack and
                 * stores "global" as the name of the script identifier
                 * before the execution of a JavaScript file
                 * @param {number} iid - Static unique instruction identifier of this callback
                 * @param {string} instrumentedFileName - Name of the instrumented script file
                 * @param {string} originalFileName - Name of the original script file
                 * @returns {undefined} - Any return value is ignored
                 */
                scriptEnter: function (iid, instrumentedFileName, originalFileName) {
                        var giid = J$.getGlobalIID(iid);
                        iidToFunName[giid] = "global";
                        if (!isBrowser) {
                                fs = require('fs');
                        }
                },
                /**
                 * @desc Identifies if a setter function has been invoked and pushes the identifier
                 * onto the SetterGetters stack.
                 * @param {number} iid - Static unique instruction identifier of this callback
                 * @param {*} base - Base object
                 * @param {*} offset - Property
                 * @param {*} val - Value to be stored in <code>base[offset]</code>
                 * @param {boolean} isComputed - True if property is accessed using square brackets.  For example,
                 * <tt>isComputed</tt> is <tt>true</tt> if the get field operation is <tt>o[p]</tt>, and <tt>false</tt>
                 * if the get field operation is <tt>o.p</tt>
                 * @param {boolean} isOpAssign - True if the operation is of the form <code>o.p op= e</code>
                 * @returns {undefined} - Any return value is ignored
                 */
                putFieldPre : function (iid, base, offset, val, isComputed, isOpAssign) {
                        var desc = getPropertyDescriptor(base,offset);
                        if(isSetter(base,offset)){
                                var giid = J$.getGlobalIID(iid);
                                setterGetter.push(giid)
                                //iidToFunName[giid] = desc.set.name  == "" ? "anon" : desc.set.name;
                                calleeToCallingLoc[getPropSafe(desc.set, SPECIAL_PROP_SID)+":"+getPropSafe(desc.get, SPECIAL_PROP_IID)]=giid;

                        }
                },
                /**
                 * @desc Identifies if a getter function has been invoked and pushes the identifier
                 * onto the SetterGetters stack.
                 * @param {number} iid - Static unique instruction identifier of this callback
                 * @param {*} base - Base object
                 * @param {string|*} offset - Property
                 * @param {boolean} isComputed - True if property is accessed using square brackets.  For example,
                 * <tt>isComputed</tt> is <tt>true</tt> if the get field operation is <tt>o[p]</tt>, and <tt>false</tt>
                 * if the get field operation is <tt>o.p</tt>
                 * @param {boolean} isOpAssign - True if the operation is of the form <code>o.p op= e</code>
                 * @param {boolean} isMethodCall - True if the get field operation is part of a method call (e.g. <tt>o.p()</tt>)
                 * @returns {undefined} - Any return value is ignored
                 *
                 */
                getFieldPre : function (iid, base, offset, isComputed, isOpAssign, isMethodCall) {
                        var desc = getPropertyDescriptor(base,offset);
                        if(isGetter(base,offset)){
                                var giid = J$.getGlobalIID(iid);
                                setterGetter.push(giid);
                                iidToFunName[giid] = desc.get.nane
                                calleeToCallingLoc[getPropSafe(desc.get, SPECIAL_PROP_SID)+":"+getPropSafe(desc.get, SPECIAL_PROP_IID)]=giid;
                        }
                },
                /**
                 * @desc Identifies the calling locations for the non-native functions and calls to native functions
                 * during a function, method, or constructor invocation.
                 * @param {number} iid - Static unique instruction identifier of this callback
                 * @param {function} f - The function object that going to be invoked
                 * @param {object} base - The receiver object for the function <tt>f</tt>
                 * @param {Array} args - The array of arguments passed to <tt>f</tt>
                 * @param {boolean} isConstructor - True if <tt>f</tt> is invoked as a constructor
                 * @param {boolean} isMethod - True if <tt>f</tt> is invoked as a method
                 * @param {number} functionIid - The iid (i.e. the unique instruction identifier) where the function was created
                 * @param {number} functionSid - The sid (i.e. the unique script identifier) where the function was created
                 * @returns {undefined} - Any return value is ignored
                 */
                invokeFunPre: function (iid, f, base, args, isConstructor, isMethod, functionIid, functionSid) {
                        var funName = f.name;
                        var giid = J$.getGlobalIID(iid);
                        var fgiid = functionSid+":"+functionIid;
                        funName = funName == "bound " ? "bound anon" : funName;
                        iidToFunName[giid] = funName == "" ? "anon" : funName;

                        if (functionIid!=undefined){
                                calleeToCallingLoc[fgiid] = giid;
                        }
                       
                        //Identifying Non-native -> Native Calls
                        if ((f.toString().indexOf('[native code]') > -1 || f.toString().indexOf('[object ') === 0)) {

                                callerIid = getLoc(giid);//iidToFunName[callStack[callStack.length - 1]] + " " + getLoc(giid);
                                calleeIid = iidToFunName[giid] + " (Native)" + " " + getLoc(giid)

                                //Adding the caller and the callee to the call edge list
                                if (!(callerIid in callerToCallee)) {
                                        callerToCallee[callerIid] = [];
                                }

                                calleeIids = callerToCallee[callerIid];
                                if (!calleeIids.includes(calleeIid)) {
                                        calleeIids.push(calleeIid);
                                }

                                callStack.push(giid); 
                        }
                },

                /**
                 * @desc Identifies the calls to non-native functions when the execution 
                 * of a function body starts.
                 * @param {number} iid - Static unique instruction identifier of this callback
                 * @param {function} f - The function object whose body is about to get executed
                 * @param {*} dis - The value of the <tt>this</tt> variable in the function body
                 * @param {Array} args - List of the arguments with which the function is called
                 * @returns {undefined} - Any return value is ignored
                 */
                functionEnter: function (iid, f, dis, args) {
                        var funName = f.name;
                        var giid = J$.getGlobalIID(iid);
                        iidToFunName[giid] = funName == "" ? "anon" : funName;
                        //If the CallStack is empty, when a function is called , the caller name is assigned as "system"
                        if (callStack.length === 0) {
                                callerName = "System";
                        }
                        else {
                                callerName = iidToFunName[callStack[callStack.length - 1]];
                        }
                        if (calleeToCallingLoc[giid] == undefined) {

                                if (f.name.startsWith("set ") || f.name.startsWith("get ")){
                                        //Identifying  Setters/Getters -> Non-native Calls 
                                        callerIid = getLoc(setterGetter[setterGetter.length - 1]);//iidToFunName[callStack[callStack.length - 1]] + " " +getLoc(setterGetter[setterGetter.length - 1]);

                                }
                                else{
                                        //Identifying Native -> Non-native Calls
                                        callerIid = callerName + " (Native)" 
                                }
                        }
                        //Identifying Non-native -> Non-native Calls
                        else {
                                callerIid = getLoc(calleeToCallingLoc[giid])//callerName + " " + getLoc(calleeToCallingLoc[giid])
                        }

                        //Adding the caller and the callee to the call edge list
                        calleeIid = getLoc(giid);//iidToFunName[giid] + " " + getLoc(giid);

                        if (!(callerIid in callerToCallee)) {
                                callerToCallee[callerIid] = [];
                        }

                        calleeIids = callerToCallee[callerIid];
                        if (!calleeIids.includes(calleeIid)) {
                                calleeIids.push(calleeIid);
                        }

                        delete calleeToCallingLoc[giid]
                        callStack.push(giid);
                },
                /**
                 * @desc Removes the top element of the setterGetter after a set method 
                 * invocation if the iid of the invoked entity matches the
                 * top element(iid) of the setterGetter
                 * @param {number} iid - Static unique instruction identifier of this callback
                 * @param {*} base - Base object
                 * @param {*} offset - Property
                 * @param {*} val - Value to be stored in <code>base[offset]</code>
                 * @param {boolean} isComputed - True if property is accessed using square brackets.  For example,
                 * <tt>isComputed</tt> is <tt>true</tt> if the get field operation is <tt>o[p]</tt>, and <tt>false</tt>
                 * if the get field operation is <tt>o.p</tt>
                 * @param {boolean} isOpAssign - True if the operation is of the form <code>o.p op= e</code>
                 * @returns {undefined} - Any return value is ignored
                 */
                putField : function (iid, base, offset, val, isComputed, isOpAssign) {
                        var giid = J$.getGlobalIID(iid);
                        if (setterGetter[setterGetter.length - 1] == giid) {
                                setterGetter.pop();
                        }
                },
                /**
                 * @desc Removes the top element of the setterGetter after a get method 
                 * invocation if the iid of the invoked entity matches the
                 * top element(iid) of the setterGetter
                 * @param {number} iid - Static unique instruction identifier of this callback
                 * @param {*} base - Base object
                 * @param {string|*} offset - Property
                 * @param {*} val - Value of <code>base[offset]</code>
                 * @param {boolean} isComputed - True if property is accessed using square brackets.  For example,
                 * <tt>isComputed</tt> is <tt>true</tt> if the get field operation is <tt>o[p]</tt>, and <tt>false</tt>
                 * if the get field operation is <tt>o.p</tt>
                 * @param {boolean} isOpAssign - True if the operation is of the form <code>o.p op= e</code>
                 * @param {boolean} isMethodCall - True if the get field operation is part of a method call (e.g. <tt>o.p()</tt>)
                 * @returns {undefined} - Any return value is ignored
                 */
                getField : function (iid, base, offset, val, isComputed, isOpAssign) {
                        var giid = J$.getGlobalIID(iid);
                        if (setterGetter[setterGetter.length - 1] == giid) {
                                setterGetter.pop();
                        }
                },
                /**
                 * @desc Removes the top element of the CallStack after a function, method, 
                 * or constructor invocation if the iid of the invoked entity matches the
                 * top element(iid) of the CallStack
                 * @param {number} iid - Static unique instruction identifier of this callback
                 * @param {function} f - The function object that was invoked
                 * @param {*} base - The receiver object for the function <tt>f</tt>
                 * @param {Array} args - The array of arguments passed to <tt>f</tt>
                 * @param {*} result - The value returned by the invocation
                 * @param {boolean} isConstructor - True if <tt>f</tt> is invoked as a constructor
                 * @param {boolean} isMethod - True if <tt>f</tt> is invoked as a method
                 * @param {number} functionIid - The iid (i.e. the unique instruction identifier) where the function was created
                 * @param {number} functionSid - The sid (i.e. the unique script identifier) where the function was created
                 * @returns {undefined} - Any return value is ignored
                 */
                invokeFun: function (iid, f, base, args, result, isConstructor, isMethod, functionIid, functionSid) {
                        var giid = J$.getGlobalIID(iid);
                        if (callStack[callStack.length - 1] == giid) {
                                callStack.pop();
                        }
                },
                /**
                 * @desc Removes the top element of the CallStack when the execution of a function body completes
                 * @param {number} iid - Static unique instruction identifier of this callback
                 * @param {*} returnVal - The value returned by the function
                 * @param {{exception:*} | undefined} wrappedExceptionVal - If this parameter is an object, the function
                 * execution has thrown an uncaught exception and the exception is being stored in the <tt>exception</tt>
                 * property of the parameter
                 * @returns {undefined} - Any return value is ignored
                 */
                functionExit: function (iid, returnVal, wrappedExceptionVal) {
                        callStack.pop();
                },
                /**
                 * @desc Removes the top element of the CallStack when the execution of a JavaScript file completes
                 * @param {number} iid - Static unique instruction identifier of this callback
                 * @param {{exception:*} | undefined} wrappedExceptionVal - If this parameter is an object, the function
                 * execution has thrown an uncaught exception and the exception is being stored in the <tt>exception</tt>
                 * property of the parameter
                 * @returns {undefined} - Any return value is ignored
                 */
                scriptExit: function (iid, wrappedExceptionVal) {
                        callStack.pop();
                },
                /**
                 * @desc Writes the output to a json file 
                 * @returns {undefined} - Any return value is ignored
                 */
                endExecution: function () {
                        //Generating the final output
                        for (caller in callerToCallee) {
                                if (!(caller in jsonCallList)){
                                        jsonCallList[caller]=callerToCallee[caller];
                                        }
                        }
                        //Writing the output to a file
                        /*if (!isBrowser) {
                                var jsonString = JSON.stringify(jsonCallList,null,4)
                                origName = process.argv[1];
                                instname = origName.replace(/.js$/, "_dynCalls.json");
                                fs.writeFileSync(instname, jsonString, function(err) {
                                        if(err) console.log('error', err);
                                      });
                        }*/
                        J$.callList=jsonCallList
                        console.log(jsonCallList)
                        return J$.callList
                }

        };

}());

/*
node src/js/commands/jalangi.js --inlineIID --inlineSource --analysis DCG.js experiments/example.js
node src/js/commands/instrument.js --inlineIID --inlineSource -i --inlineJalangi --analysis src/js/sample_analyses/ChainedAnalyses.js --analysis src/js/sample_analyses/dlint/Utils.js --analysis DynNative.js --outputDir /tmp experiments/html/
open file:///tmp/html/index.html
*/
