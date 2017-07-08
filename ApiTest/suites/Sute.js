'use strict';
 
module.exports = {
  "suite": {
    "name": "Posts",
    "description": "CRUD operations on the posts resource",
    "tests": [
      {
        "name": "get_posts_success",
        "description": "Fetch posts",
        "api_calls": [
          {
            it: "can create a GameScore object",
            request: "GET /posts",
            status: 200,
            assert: function(body, headers) {
				var k = body;
				debugger;
            }
          }
        ]
      }
    ]
  }
}
