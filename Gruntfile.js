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
					before: true
				},
                reporter: require('jshint-stylish')
            },
            uses_defaults: ['public/app/**/**/**/*.js', 'test/**/**/**/*.js']
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
					"views/layout.html": "views/jade/layout.jade"
				}
			}
		},
		sass: {
			dist: {
				files: {
					'public/assets/styles/main.css': 'styles/main.scss'
				}
			}
		},
		watch: {
			jade: {
				files: ['views/jade/*.jade'],
				tasks: ['jade'],
				options: {
					spawn: false,
				}
			},
			styles: {
				files: ['styles/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: false,
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-contrib-watch');

    // Tasks
    grunt.registerTask('test', ['mochaTest']);
    grunt.registerTask('lint', ['jshint']);

	// Default should be run after npm install
	grunt.registerTask('default', ['test']);
};
