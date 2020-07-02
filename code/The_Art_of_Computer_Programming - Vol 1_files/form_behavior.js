define(["require","exports","tslib","rondo/v1/index","rondo-saga/v1","rondo-forms/v1/types","rondo-forms/v1/utils"],(function(e,t,n,i,r,a,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FormBehavior=function(e){var t=e.fields,s=e.validator,o=e.commitActions,u=e.resetActions,l=e.clearActions,d=e.changeAction;return(function(){function e(){this.initialState=function(){return{validInfo:a.ValidInfoValid}},this.actionReset=i.createOrUseIn(this,u).watch((function(){return Object.keys(t).forEach((function(e){return t[e].actionReset&&t[e].actionReset()}))})),this.actionCommit=i.createOrUseIn(this,o).watch((function(){return Object.keys(t).forEach((function(e){return t[e].actionCommit&&t[e].actionCommit()}))})),this.actionClear=i.createOrUseIn(this,l).watch((function(){return Object.keys(t).forEach((function(e){return t[e].actionClear&&t[e].actionClear()}))})),this.actionSetValues=i.createAction().watch((function(e,n){var i=n.fieldsToValue,r=n.setAsInitial,a=void 0!==r&&r;i&&Object.keys(i).forEach((function(e){t[e]&&(a?t[e].actionFieldSet(i[e]):t[e].actionFieldChange(i[e]))}))})),this.actionFieldSetValid=i.createAction().handle((function(e,t){return{validInfo:t}})),this.actionValidate=i.createAction(),this.actionChanged=i.createOrUseIn(this,d),this.dirtyFields=i.createSelector(Object.keys(t).map((function(e){return t[e].dirty})),(function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return Object.keys(t).filter((function(t,n){return e[n]}))})),this.dirty=i.createSelector(this.dirtyFields,(function(e){return e.length>0})),this.values=i.createSelector(Object.keys(t).map((function(e){return t[e].fieldValue})),(function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return Object.keys(t).reduce((function(t,n,i){return t[n]=e[i],t}),{})})),this.validFields=i.createSelector(Object.keys(t).map((function(e){return t[e].valid})),(function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return Object.keys(t).filter((function(t,n){return e[n]}))})),this.validInfo=i.createSelector((function(e){return e.validInfo})),this.valid=i.createSelector(this.validFields,this.validInfo,(function(e,n){return e.length===Object.keys(t).length&&(!n||n&&n.valid)})),this.validMessage=i.createSelector((function(e){var t=e.validInfo;return t&&t.message?t.message:void 0})),this.validValues=i.createSelector(this.values,this.validFields,(function(e,t){return Object.keys(e).filter((function(e){return t.indexOf(e)>=0})).reduce((function(t,n){return t[n]=e[n],t}),{})})),this.initialValues=i.createSelector(Object.keys(t).map((function(e){return t[e].initialValue})),(function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return Object.keys(t).reduce((function(t,n,i){return t[n]=e[i],t}),{})})),this.formChangeSaga=r.takeEverySaga([this.actionValidate,this.actionChanged],this.formChange),this.fieldChangedSaga=r.takeLatestSaga(Object.keys(t).map((function(e){return t[e].actionFieldChanged})),(function(){return n.__generator(this,(function(e){switch(e.label){case 0:return[4,r.delay(25)];case 1:return e.sent(),[4,r.put(this.actionChanged)()];case 2:return e.sent(),[2]}}))})),this.run=i.createSaga((function(){return n.__generator(this,(function(e){switch(e.label){case 0:return[4,this.formChange()];case 1:return e.sent(),[2]}}))}))}return e.prototype.formChange=function(){var e,t,i,a,o;return n.__generator(this,(function(n){switch(n.label){case 0:if(!s)return[2];if(e=s(this.values()),!c.isPromise(e))return[3,7];n.label=1;case 1:return n.trys.push([1,4,,6]),[4,e];case 2:return t=n.sent(),i=t.type,a=t.valid,o=t.message,[4,r.put(this.actionFieldSetValid)({message:o,valid:a,type:i||(a?"valid":"error")})];case 3:return n.sent(),[3,6];case 4:return n.sent(),[4,r.put(this.actionFieldSetValid)({valid:!1,type:"error",message:void 0})];case 5:return n.sent(),[3,6];case 6:return[3,9];case 7:return[4,r.put(this.actionFieldSetValid)({message:e.message,valid:!!e.valid,type:e.type||c.validStringType(!!e.valid)})];case 8:n.sent(),n.label=9;case 9:return[2]}}))},e.displayName="FormBehavior",e})()}}));
//# sourceMappingURL=form_behavior.min.js-vflQJ0Qgh.map