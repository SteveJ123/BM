define(["require","exports","tslib"],(function(n,e,t){"use strict";function i(n,e,t){n&&n.event(e,t)}function o(n){return n.link_state[".tag"].indexOf("_linked")>=0}Object.defineProperty(e,"__esModule",{value:!0}),e.logEvent=i,e.handleShowByline=function(n,e){return function(){i(e,"show_byline",{extension_id:n})}},e.getOpenOptionsWithLogging=function(n,e){return n.map((function(n){return t.__assign(t.__assign({},n),{handler:function(){n.handler(),i(e,"select_legacy_action",{type:n.type})}})}))},e.getAppActionExtras=function(n){return{action_id:n.id,encoded_app_id:n.app_id,action_type:o(n)?"select_action":"select_connect"}},e.isLinked=o,e.isPrelinked=function(n){return"oauth_prelinked"===n.link_state[".tag"]},e.partitionActionsByLinkStatus=function(n){var e=[],t=[];return n.map((function(n){n.app_id&&(o(n)?e.push(n.app_id):t.push(n.app_id))})),{connected_apps:e,unconnected_apps:t}}}));
//# sourceMappingURL=common.min.js-vflfgBsjw.map