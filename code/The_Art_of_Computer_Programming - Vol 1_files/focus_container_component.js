define(["require","exports","tslib","react","classnames","comments2/components/comment_editor/core/editor_component"],(function(e,t,n,o,r,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o=n.__importStar(o),r=n.__importDefault(r);var s=(function(e){function t(){var t=e.apply(this,arguments)||this;return t.containerRef=null,t.setContainerRef=function(e){t.containerRef=e},t.onFocus=function(e){t.isOwnChild(e.relatedTarget)||t.triggers.container.focus(e)},t.onBlur=function(e){t.isOwnChild(e.relatedTarget)||t.triggers.container.blur(e)},t}return n.__extends(t,e),Object.defineProperty(t.prototype,"className",{get:function(){return r.default("sc-comment-editor-focus-container",{"sc-comment-editor-focus-container-is-focused":this.status.container.isFocused})},enumerable:!0,configurable:!0}),t.prototype.isOwnChild=function(e){return!!e&&!!this.containerRef&&this.containerRef.contains(e)},t.prototype.render=function(){return o.createElement("div",{className:this.className,ref:this.setContainerRef,onFocus:this.onFocus,onBlur:this.onBlur},this.props.children)},t})(i.EditorComponent);t.FocusContainerComponent=s}));
//# sourceMappingURL=focus_container_component.min.js-vflhhvXqq.map