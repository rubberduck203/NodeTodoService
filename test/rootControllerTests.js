var mocha = require('mocha'),
    expect = require('chai').expect,
    httpMocks = require('node-mocks-http');

var ApiInfo = require('../ApiInfo');
var root = require('../controllers/root');

describe('RootController', function () {
    
    describe('index', function(){
         describe('when json reqested', function(){
            var request, response;
            beforeEach(function(){
                request = httpMocks.createRequest({
                    headers: {
                        Accept: 'application/json'
                    }
                });
                var responseOptions = {req: request};
                response = httpMocks.createResponse(responseOptions);
            });

            it('returns a 200 ok', function(){
                root.index(request, response);
                expect(response.statusCode).to.equal(200);
            });

            it('should return ApiInfo', function(){
                var expected = new ApiInfo();

                root.index(request, response);
                var actual = response._getData();
                
                expect(actual).to.deep.equal(expected);
            });
        });

        describe('when html is requested', function(){
            var request, response;
            beforeEach(function(){
                request = httpMocks.createRequest({
                    headers: {
                        Accept: 'text/html'
                    }
                });
                responseOptions = {req: request};
                response = httpMocks.createResponse(responseOptions);
            });

            it('should get the root view', function(){
                root.index(request, response);
                expect(response._getRenderView()).to.equal('root');
            });

            it('should return ApiInfo', function(){
                root.index(request, response);
                expect(response._getRenderData()).to.deep.equal(new ApiInfo());
            });
        });
    });
});