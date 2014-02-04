angular.module('ghost').directive('postsByUser', ['$http', PostsByUserDirective]);

function PostsByUserDirective ($http) {
    return {
        template: '<section class="post-related clearfix" ng-if="postsByUser.length > 0"> <strong>Other posts by [[name]]</strong><ul>'+
                    '<li ng-repeat="post in postsByUser"><a ng-href="/[[post.slug]]">[[post.title]]</a></li>'+
                 '</ul>    <div style="clear:both"></div></section>',
        restrict: 'E',
        scope: {
            user: '@',
            slug: '@',
            name: '@'
        },
        link: function(scope, element, attrs) {
            scope.postsByUser = [];
            var posts = [];
            $http({ url: '/ghost/api/v0.1/posts?user='+scope.user, method: 'GET'})
            .then(function(res){
                for(var i = res.data.posts.length - 1; i >= 0; i--) {
                    var post = res.data.posts[i];

                    if(post.slug != scope.slug)
                            posts.push(post)
                };
                scope.postsByUser = posts;
            });
        }
    }
}