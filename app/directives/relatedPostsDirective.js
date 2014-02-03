angular.module('ghost').directive('relatedPosts', ['$http', RelatedPostsDirective]);

function RelatedPostsDirective($http){
	return {
		template: ' <section class="post-related clearfix" ng-if="relatedPosts.length > 0"> <strong>Related posts</strong><ul>'+
                	'<li ng-repeat="post in relatedPosts"><a ng-href="/[[post.slug]]">[[post.title]]</a></li>'+
           		 '</ul>    <div style="clear:both"></div></section>',
		restrict: 'E',
		scope: {
			tags: '@',
			slug: '@'
		},
		link: function(scope, element, attrs){
			scope.relatedPosts = [];
			var posts = [];
			var encodedTags = encodeURIComponent(scope.tags);
			$http({ url: '/ghost/api/v0.1/posts?tags='+encodedTags, method: 'GET'})
				.then(function(res){
					for (var i = res.data.posts.length - 1; i >= 0; i--) {
						var post = res.data.posts[i];
						if(post.slug != scope.slug)
							posts.push(post);
					};
					scope.relatedPosts = posts;
				});

		}
	}


}