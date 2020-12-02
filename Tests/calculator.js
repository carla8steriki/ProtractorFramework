let homepage = require('../pages/homepage')

describe('demo calculator test', function() {

it('addition test', function(){

	//browser.get('http://juliemr.github.io/protractor-demo/');
	
	homepage.get('http://juliemr.github.io/protractor-demo/');

	//var input = element(by.model('first')).sendKeys('2');
	homepage.enterFirstNumber('4');

	//var input = element(by.model('second')).sendKeys('3');
	homepage.enterSecondNumber('3');

	//element(by.css('[ng-click="doAddition()"]')).click();
	homepage.clickGo();

	//element(by.cssContainingText('.ng-binding','5'));

	//expect(result.getText()).toEqual('5');
	homepage.verifyResult('7');

	browser.sleep(2000)

	

});


});