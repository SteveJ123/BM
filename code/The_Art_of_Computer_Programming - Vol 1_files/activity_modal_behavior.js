define(["require","exports","tslib","modules/clean/teams/admin/pages/activity/activity_modal/util","modules/clean/teams/admin/pages/activity/behaviors/activity_logger","rondo/v1/index","modules/clean/rondo/behavior/logger_behavior"],(function(e,t,i,c,n,a,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t){return e[t].map((function(t){return i.__assign(i.__assign({},t),{checked:e.checkedCategories.includes(t.id),highlighted:e.highlightedCategory===t.id,activities:t.activities.map((function(t){return i.__assign(i.__assign({},t),{checked:e.checkedActivities.includes(t.id)})}))})}))},s=(function(){function e(){this.actionSearch=a.createAction().handle((function(e,t){var a=t||"",r=new RegExp(c.escapeRegExp(a),"i"),o=e.allCategories.map((function(e){return i.__assign(i.__assign({},e),{activities:r.test(e.label)&&e.activities||e.activities.filter((function(e){return r.test(e.label)}))})})).filter((function(e){return e.activities.length>0}));return n.logActivityPageEventToHive({eventName:"activity_search",extra:{activity_search:o.length>0?a:""}}),{search:a,filteredCategories:o}})),this.actionHighlight=a.createAction().handle((function(e,t){return{highlightedCategory:t}})),this.actionCheckCategory=a.createAction().handle((function(e,t){var i=Array.from(e.checkedCategories),c=t,n=c.id;return c.checked?i.push(n):i.includes(n)&&i.splice(i.indexOf(n),1),{checkedCategories:i}})),this.actionClear=a.createAction().handle((function(){return{checkedActivities:[],checkedCategories:[]}})),this.actionCheckActivity=a.createAction().handle((function(e,t){var i=Array.from(e.checkedActivities),c=t,n=c.id;return c.checked?i.push(n):i.includes(n)&&i.splice(i.indexOf(n),1),{checkedActivities:i}})),this.actionClose=a.createAction().handle((function(e){return e.onClose(),{}})),this.actionOnSubmit=a.createAction().handle((function(e){return e.onSubmit(e.checkedCategories,e.checkedActivities),{}})),this.search=a.createSelector((function(e){return e.search})),this.filteredCategories=a.createSelector((function(e){return o(e,"filteredCategories")})),this.allCategories=a.createSelector((function(e){return o(e,"allCategories")})),this.countChecked=a.createSelector(this.allCategories,(function(e){return e.reduce((function(e,t){return e+c.numCheckedActivities(t)}),0)})),a.extendBehavior(this,r.LoggerBehavior({loggingFunction:n.logActivityPageEventToHive,actionsToLog:[{action:this.actionOnSubmit,parser:n.activityEvent}]}))}return e.displayName="ActivityModalBehavior",e})();t.ActivityModalBehavior=s}));
//# sourceMappingURL=activity_modal_behavior.min.js-vflRFH7IM.map