define(["require","exports","tslib","react-redux","react","modules/clean/react/retrieval_success_banner/constants","modules/clean/react/retrieval_success_banner/data/action_creators","modules/clean/react/retrieval_success_banner/data/store","modules/clean/react/retrieval_success_banner/data/selectors","modules/clean/react/retrieval_success_banner/browse_success_banner","modules/clean/react/retrieval_success_banner/search_success_banner","modules/clean/react/retrieval_success_banner/util"],(function(e,a,r,n,t,s,c,i,o,u,l,S){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),t=r.__importDefault(t),c=r.__importStar(c),o=r.__importStar(o);var d={initialStoreByLocalStorage:c.initialStoreByLocalStorage},B=(function(e){function a(a){var r=e.call(this,a)||this;return r.updateBannerVariant=function(){var e=r.props,a=e.displayContext,n=e.expSearchSuccessBanner,t=e.searchSuccessBannerShouldShow,c=e.browseSuccessBannerCounterComplete,i=e.browseSuccessBannerShouldShow,o=e.inUniversalSinglePageSearch;if(S.userIsOptedOutOfRetrievalSuccessBanner())return r.setState({bannerVariant:s.BannerVariant.NONE}),void S.updateRSBVisibility(!1,!1);var u=n&&t&&!S.userIsOptedOutOfRetrievalSuccessBanner(),l=(c||i)&&a!==s.SearchSuccessDisplayContext.SEARCH_RESULTS;o||S.updateRSBVisibility(u,l),u?r.setState({bannerVariant:s.BannerVariant.SSB}):l?r.setState({bannerVariant:s.BannerVariant.BSB}):r.setState({bannerVariant:s.BannerVariant.NONE})},r.state={bannerVariant:s.BannerVariant.NONE},r}return r.__extends(a,e),a.prototype.componentDidUpdate=function(){this.updateBannerVariant()},a.prototype.UNSAFE_componentWillMount=function(){(0,this.props.initialStoreByLocalStorage)(),this.updateBannerVariant()},a.prototype.render=function(){var e=this.props,a=e.user,r=e.displayContext,n=this.state.bannerVariant;return n===s.BannerVariant.SSB?t.default.createElement(l.SearchSuccessBanner,{user:a,displayContext:r}):n===s.BannerVariant.BSB?t.default.createElement(u.BrowseSuccessBanner,{displayContext:r}):null},a.defaultProps={displayContext:s.SearchSuccessDisplayContext.IN_EMBEDDED_APP},a})(t.default.PureComponent);a.RetrievalSuccessBrowseviewBannerComponent=B;var p=n.connect((function(e,a){var n=o.isBrowseSuccessBannerCounterComplete,t=o.isBrowseSuccessBannerVisible,s=o.isRetrievalSuccessBannerVisible,c=o.isSearchSuccessBannerVisible,i=o.isSearchBarAbandoned,u=o.isSearchResultActionClicked,l=o.isSearchSuccessBannerDismissed;return r.__assign({browseSuccessBannerCounterComplete:n(e),browseSuccessBannerShouldShow:t(e),retrievalSuccessBannerShouldShow:s(e),searchSuccessBannerShouldShow:c(e),searchBarAbandoned:i(e),searchResultActionClicked:u(e),searchSuccessBannerDismissed:l(e)},a)}),d)(B),_=i.getStoreForSuccessBanner();a.RetrievalSuccessBrowseviewBannerWithProvider=function(e){return t.default.createElement(n.Provider,{store:_},t.default.createElement(p,r.__assign({},e)))}}));
//# sourceMappingURL=retrieval_success_browseview_component.min.js-vflIQR76n.map