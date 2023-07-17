[14-07 11:50] Fortune Cloud Technologies
    

var request = require('supertest');

var app = require('../index.js');describe('GET /', function() {​​​​​​​​

 it('respond with hello world', function(done) {​​​​​​​​ //navigate to root and check the the response is "hello world"

 request(app).get('/').expect('hello all of you', done);

 }​​​​​​​​);

}​​​​​​​​);

<https://teams.microsoft.com/l/message/19:PuL1PNj8ttVSKHdvPHGkHuW55Yhky4VgO0HbV2S8mU01@thread.tacv2/1689315657154?tenantId=88738e75-9e08-47e1-908f-bc12b11c19ad&amp;groupId=0e190c78-be44-4d02-abe6-974961bb42c2&amp;parentMessageId=1689315657154&amp;teamName=Devops 18 April&amp;channelName=General&amp;createdTime=1689315657154&amp;allowXTenantAccess=false>
