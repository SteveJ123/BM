define(["require","exports","tslib","react","modules/clean/react/title_bubble","modules/clean/react/file_activity_stream/updating_time_ago"],(function(e,t,i,n,r,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),t.prototype.render=function(){var e=this.props.timestamp,t=e.toLocaleString(void 0,{day:"numeric",month:"short",year:"numeric",hour:"numeric",minute:"numeric"});return n.default.createElement(r.TitleBubble,{content:n.default.createElement("div",{className:"file_activity_stream_context_tooltip"},t),position:r.TitleBubble.POSITIONS.BOTTOM,isTargetPositionFixed:!0},n.default.createElement(a.UpdatingTimeAgo,{timestamp:e}))},t})((n=i.__importDefault(n)).default.PureComponent);t.UpdatingTimeAgoWithDetails=o}));
//# sourceMappingURL=updating_time_ago_with_details.min.js-vflxn0hsT.map