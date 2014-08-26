module.exports = function (grunt) {
	'use strict';

    // Grunt configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
        mochaTest: {
            lib: {
                options: {
                    reporter: 'spec',
                    growl: true,
                    colors: true
                },
                src: ['test/**/**/**/*.js']
            }
        },
		jshint: {
            options: {
                node : true,        // node variables
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
					describe: true,
					it: true,
					beforeEach: true,
					before: true,
					define: true,
					require: true
				},
                reporter: require('jshint-stylish')
            },
            uses_defaults: ['app/public/app/**/**/**/*.js', 'test/**/**/**/*.js']
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
					'views/layout.html': 'views/jade/layout.jade',

					// side bars
					'app/public/app/templates/sidebar.html': 'views/jade/templates/sidebar.jade',
					'app/public/app/templates/adminSidebar.html': 'views/jade/templates/adminSidebar.jade',

					// content holder and admin content editor
					'app/public/app/templates/content.html': 'views/jade/templates/content.jade',
					'app/public/app/templates/adminContent.html': 'views/jade/templates/adminContent.jade',

					// feed
					'app/public/app/templates/feed.html': 'views/jade/templates/feed.jade',

					// admin login
					'app/public/app/templates/login.html': 'views/jade/templates/login.jade'
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
					'app/public/assets/styles/main.css': ['styles/main.scss', 'styles/utility/**/*.scss']
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
				files: ['views/jade/**/*.jade'],
				tasks: ['jade'],
				options: {
					spawn: false,
				}
			},
			styles: {
				files: ['styles/**/**/*.scss'],
				tasks: ['sassMin'],
				options: {
					spawn: false,
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-contrib-watch');

    // Tasks
	grunt.registerTask('sassMin', ['sass', 'cssmin']);
    grunt.registerTask('test', ['mochaTest']);
    grunt.registerTask('lint', ['jshint']);
	grunt.registerTask('build', ['jade', 'sassMin']);

	// Default should be run after npm install
	grunt.registerTask('default', ['test']);
};
