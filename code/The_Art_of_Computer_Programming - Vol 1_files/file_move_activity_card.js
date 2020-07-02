define(["require","exports","tslib","react","modules/core/i18n","modules/clean/react/file_activity_stream/file_activity_stream_card","modules/clean/react/file_activity_stream/utils","modules/clean/react/file_activity_stream/breadcrumbs"],(function(e,t,a,r,i,s,l,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),Object.defineProperty(t.prototype,"message",{get:function(){var e=this.props.activity.user;return l.isViewingUser(this.props)?i.intl.formatMessage({id:"gqBhYf",defaultMessage:"<strong>You</strong> moved this file"},{strong:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return r.default.createElement("strong",null,e)}}):i.intl.formatMessage({id:"8R/Iui",defaultMessage:"<strong>{name}</strong> moved this file"},{strong:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return r.default.createElement("strong",null,e)},name:e.display_name})},enumerable:!0,configurable:!0}),t.prototype.render=function(){var e=this.props,t=e.activity,a=e.viewingUser;return r.default.createElement(s.FileActivityStreamCard,{user:t.user,timestamp:t.timestamp,className:"file_move_activity_stream_card",message:this.message},r.default.createElement(s.FileActivityStreamCard.Detail,{placeholderClass:"file_activity_stream_card__image_placeholder"},r.default.createElement("div",{style:{flex:"1"}},r.default.createElement("div",{className:"file_move_activity_stream_card__path"},r.default.createElement(n.Breadcrumbs,{filepath:t.path,maxWidth:40,user:a})))))},t})((r=a.__importDefault(r)).default.Component);t.FileMoveActivityCard=c}));
//# sourceMappingURL=file_move_activity_card.min.js-vfl3P0-ET.map