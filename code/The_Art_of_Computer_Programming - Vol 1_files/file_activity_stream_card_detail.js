define(["require","exports","tslib","react","prop-types","modules/clean/react/file_activity_stream/utils"],(function(e,t,a,i,r,s){"use strict";function l(e){var a=e.detail,r=e.title;return i.default.createElement("div",{className:"file_activity_stream_card_detail_entity"},i.default.createElement("div",{className:"file_activity_stream_card_detail_entity__title"},i.default.createElement("strong",null,r)),i.default.createElement("div",{className:t.ENTITY_DETAIL_CLASS_NAME},a))}Object.defineProperty(t,"__esModule",{value:!0}),i=a.__importDefault(i),r=a.__importStar(r),t.ENTITY_DETAIL_CLASS_NAME="file_activity_stream_card_detail_entity__detail";var n=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.email,r=e.group,l=e.icon,n=e.placeholderClass,_=e.user,d=a||r||_?s.renderAvatar(a||r||_,{dimension:16}):l?s.renderIcon(l):n?i.default.createElement("div",{className:n}):null;return i.default.createElement("div",{className:"file_activity_stream_card__inner"},i.default.createElement("div",{className:"file_activity_stream_card__avatar"},d),t)},t.Entity=l,t.propTypes=r.oneOfType([r.shape({user:r.shape({display_name:r.string.isRequired,photo_url:r.string})}),r.shape({group:r.shape({is_team_group:r.bool.isRequired,name:r.string.isRequired})}),r.shape({email:r.string}),r.shape({icon:r.shape({group:r.string.isRequired,name:r.string.isRequired})}),r.shape({placeholderClass:r.string.isRequired})]).isRequired,t})(i.default.Component);t.FileActivityStreamCardDetail=n}));
//# sourceMappingURL=file_activity_stream_card_detail.min.js-vfl6tH1BS.map