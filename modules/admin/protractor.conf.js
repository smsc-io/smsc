// @AngularClass
require('ts-node/register');

exports.config = {
	//seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',
	sauceUser: process.env.SAUCE_USERNAME,
	sauceKey: process.env.SAUCE_ACCESS_KEY,
	baseUrl: 'http://localhost:3000/',

	// use `npm run e2e`
	specs: [
		'src/**/**.e2e.ts',
		'src/**/*.e2e.ts'
	],
	exclude: [],

	framework: 'jasmine',

	allScriptsTimeout: 110000,

	jasmineNodeOpts: {
		showTiming: true,
		showColors: true,
		isVerbose: true,
		includeStackTrace: true,
		defaultTimeoutInterval: 400000
	},

	onPrepare: function(){
		var caps = browser.getCapabilities()
	},

	multiCapabilities: [
		{
			browserName: 'chrome',
			version: '49',
			platform: 'OS X 10.11',
			name: "chrome-tests",
			shardTestFiles: true,
			maxInstances: 25,
			build: process.env.TRAVIS_BUILD_NUMBER,
			'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER
		},
		{
			browserName: 'firefox',
			version: '45',
			platform: 'OS X 10.11',
			name: "firefox-tests",
			shardTestFiles: true,
			maxInstances: 25,
			build: process.env.TRAVIS_BUILD_NUMBER,
			'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER
		},
		{
			browserName: 'safari',
			platform: 'OS X 10.11',
			name: "safari-tests",
			shardTestFiles: true,
			maxInstances: 25,
			build: process.env.TRAVIS_BUILD_NUMBER,
			'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER
		},
		{
			'browserName': 'MicrosoftEdge',
			'platform': 'windows',
			build: process.env.TRAVIS_BUILD_NUMBER,
			'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER
		},
		{
			platformName: 'iOS',
			platformVersion: '9.2',
			browserName: '',
			app: 'safari',
			deviceName: 'iPhone Simulator',
			'appium-version': "1.4.0",
			build: process.env.TRAVIS_BUILD_NUMBER,
			'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER

		},
		{
			platformName: 'Android',
			platformVersion: '4.4',
			browserName: 'Browser',
			deviceName: 'Android Emulator',
			'appium-version': "1.4.0",
			build: process.env.TRAVIS_BUILD_NUMBER,
			'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER
		}
	],

	/**
	 * Angular 2 configuration
	 *
	 * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
	 * `rootEl`
	 *
	 */
	useAllAngular2AppRoots: true,

	onComplete: function() {
		var printSessionId = function(jobName){
			browser.getSession().then(function(session) {
				console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
			});
		}

		printSessionId("Admin Module");
	}
};
