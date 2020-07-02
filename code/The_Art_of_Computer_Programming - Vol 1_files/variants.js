define(["require","exports","tslib","react","prop-types","external/lodash"],(function(n,t,e,r,i,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=(function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return e.__extends(t,n),t.prototype.render=function(){return r.createElement("div",null,this.props.children)},t})(r.Component);function u(n){var t=n.variant,e=n.children,i=void 0;return r.Children.forEach(e,(function(n){n&&n.props.name===t&&(i=n)})),i?r.cloneElement(i):null}t.Variant=o,t.VariantTrue=function(n){var t=n.children;return r.createElement(o,{name:!0,children:t})},t.VariantTrue.defaultProps={name:!0},t.VariantFalse=function(n){var t=n.children;return r.createElement(o,{name:!1,children:t})},t.VariantFalse.defaultProps={name:!1},t.Variants=u;var l=(function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return e.__extends(t,n),t.prototype.componentWillMount=function(){var n,t,o=this.props,l=o.contextKey,s=o.contextPath;this.variants=((t=(function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return e.__extends(t,n),t.prototype.render=function(){return r.createElement(u,e.__assign({variant:a.get(this.context[l],s)},this.props))},t})(r.Component)).contextTypes=((n={})[l]=i.any,n),t)},t.prototype.render=function(){var n=this.variants,t=this.props.children;return r.createElement(n,null,t)},t})(r.Component);t.VariantsContext=l}));
//# sourceMappingURL=variants.min.js-vflQiHss7.map