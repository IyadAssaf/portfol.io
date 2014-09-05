module.exports = function (grunt) {
	'use strict';

	var fs = require('fs'),
		_ = require('underscore');

	/*!
	 * Grunt configuration
	 */
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
        mochaTest: {
            server: {
                options: {
                    reporter: 'spec',
                    growl: true,
                    colors: true
                },
                src: ['test/server/unit/**/**/*Spec.js', 'test/server/unit/common.js']
            }
        },
		jshint: {
			browser: {
	            options: {
					browser : true,     // browser variables
	                curly: true,        // disallow functions without curly braces
	                eqeqeq: true,       // === and  !== instead of == and !=
	                strict: true,       // have to enable strict mode
	                undef: true,        // disallow globally defined variables
	                noarg: true,        // prevents depreciated javascript functions
	                loopfunc: true,     // disallow functions inside loops
	                immed: true,        // disallow immediate functions, they need ()
	                indent: 4,          // force tab indentation to be set to 4
	                quotmark: 'single', // force use of single quotation marks
	                camelcase: true,    // forces camel case - note this needs to be ignored when using json apis
	                unused: true,       // disallows unused variables
	                eqnull: true,       // allow variable comparison with null or undefined
	                laxcomma: true,     // allow commas before variables or keys
	                globals: {
						console: true,
						describe: true,
						it: true,
						beforeEach: true,
						afterEach: true,
						before: true,
						define: true,
						require: true
					},
	                reporter: require('jshint-stylish')
	            },
				src: ['app/public/app/**/**/**/*.js']
			},
			node: {
				options: {
					node : true,        // node variables
					curly: true,        // disallow functions without curly braces
					eqeqeq: true,       // === and  !== instead of == and !=
					strict: true,       // have to enable strict mode
					undef: true,        // disallow globally defined variables
					noarg: true,        // prevents depreciated javascript functions
					loopfunc: true,     // disallow functions inside loops
					immed: true,        // disallow immediate functions, they need ()
					indent: 4,          // force tab indentation to be set to 4
					quotmark: 'single', // force use of single quotation marks
					camelcase: true,    // forces camel case - note this needs to be ignored when using json apis
					unused: true,       // disallows unused variables
					eqnull: true,       // allow variable comparison with null or undefined
					laxcomma: true,     // allow commas before variables or keys
					globals: {
						describe: true,
						it: true,
						beforeEach: true,
						afterEach: true,
						before: true,
						define: true,
						require: true
					},
					reporter: require('jshint-stylish'),
					ignores: ['app/public/**/**/**/**/*.js']
				},
				src: ['index.js', 'app/**/**/**/*.js', 'test/**/**/**/**/*.js'],
			}
		},
		jade: {
			debug: {
				options: {
					data: {
						debug: true,
						timestamp: ""
					}
				},
				files: {

					// main layout
					'templates/views/layout.html': 'templates/views/jade/layout.jade',

					// side bars
					'app/public/app/templates/sidebar.html': 'templates/views/jade/templates/sidebar.jade',
					'app/public/app/templates/adminSidebar.html': 'templates/views/jade/templates/adminSidebar.jade',

					// content holder and admin content editor
					'app/public/app/templates/content.html': 'templates/views/jade/templates/content.jade',
					'app/public/app/templates/adminContent.html': 'templates/views/jade/templates/adminContent.jade',

					// feed
					'app/public/app/templates/feed.html': 'templates/views/jade/templates/feed.jade',

					// admin login
					'app/public/app/templates/login.html': 'templates/views/jade/templates/login.jade'
				}
			}
		},
		sass: {
			dist: {
				options: {
					loadPath: [
						// bootstrap
						'app/public/assets/bower_components/bootstrap-sass-official/assets/stylesheets',

						// icons
						'app/public/assets/bower_components/octicons/octicons'
					]
				},
				files: {
					'app/public/assets/styles/main.css': ['templates/styles/main.scss', 'templates/styles/utility/**/*.scss']
				}
			}
		},
		cssmin: {
			minify: {
				expand: true,
				cwd: 'app/public/assets/styles/',
				src: ['*.css', '!*.min.css'],
				dest: 'app/public/assets/styles/',
				ext: '.min.css'
			}
		},
		watch: {
			jade: {
				files: ['templates/views/jade/**/*.jade'],
				tasks: ['jade'],
				options: {
					spawn: false,
				}
			},
			styles: {
				files: ['templates/styles/**/**/*.scss'],
				tasks: ['sassMin'],
				options: {
					spawn: false,
				}
			}
		},
		mkdir: {
            all: {
                options: {
                    create: ['cfg/.local/mongo', 'cfg/.local/redis']
                }
            }
        }
	});

	/*!
	 * Load tasks
	 */
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-mkdir');

    /*!
	 * Tasks
	 */
	// Create public cfg file
	grunt.registerTask('cfg-public', function () {

		var cfg = fs.readFileSync('./templates/cfg.js').toString(),
			profile = require('./cfg/common.js').profile;

		fs.writeFileSync('./app/public/app/cfg.js', _.template(cfg)(profile));
	});
	grunt.registerTask('sassMin', ['sass', 'cssmin']);
    grunt.registerTask('test', ['mochaTest']);
    grunt.registerTask('lint', ['jshint']);
	grunt.registerTask('validate', ['jshint', 'test']);
	grunt.registerTask('build', ['jade', 'sassMin', 'cfg-public']);
	grunt.registerTask('config', ['mkdir']);

	// Default should be run after npm install
	grunt.registerTask('default', ['validate']);
};
