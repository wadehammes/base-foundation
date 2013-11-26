module.exports = function(grunt) {

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        notify_hooks: {
            options: {
                enabled: true,
                max_jshint_notifications: 5,
                title: "Base Template" // Change this to your project
            }
        },
        //- Concat JS into single files
        concat: {
            plugins : {
                src: [
                    'js/_lib/{,*/}*.js'
                ],
                dest: 'js/_lib.concat.js'
            },
            app : {
                src: [
                    'js/_src/{,*/}*.js'
                ],
                dest: 'js/_app.concat.js'
            },
        },
        //- Uglify concatenated and other JS files
        uglify: {
            plugins : {
                files: {
                    'templates/js/plugins.min.js': ['<%= concat.plugins.dest %>']
                    //'drupal/sites/all/themes/theme_name/js/plugins.min.js': ['<%= concat.plugins.dest %>']
                }
            },
            app : {
                files: {
                    'templates/js/app.min.js': ['<%= concat.app.dest %>']
                    //'drupal/sites/all/themes/theme_name/js/app.min.js': ['<%= concat.app.dest %>']
                }
            },
            main : {
                files: {
                    'templates/js/main.min.js': ['js/main.js']
                    //'drupal/sites/all/themes/theme_name/js/main.min.js': ['_js/main.js']
                }
            }
        },
        //- Compile SASS
        sass: {
            options: {
                includePaths: ['bower_components/foundation/scss']
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'templates/css/app.css': 'scss/app.scss'
                }        
            }
        },
        //- Notify when task is complete
        notify: {
            css_compile: {
                options: {
                    title: 'SASS',  // optional
                    message: 'Compile was successful', //required
                }
            },
            app_change: {
                options: {
                    title: 'Javascript',  // optional
                    message: 'Concatenated and minifed successfully', //required
                }
            }
        },
        //- Watchers
        watch: {
            css: {
                files: [/*'drupal/sites/all/themes/theme_name/css/*.css',*/ 'templates/css/*.css'],
                tasks: ['notify:css_compile']
            },
            sass: {
                files: ['scss/{,*/}*.scss'],
                tasks: ['sass_change']
            },
            js: {
                files: ['<%= concat.app.src %>', 'js/main.js'],
                tasks: ['notify:app_change','app_change']                
            }
        }
    });
    //- REGISTER ALL OUR GRUNT TASKS
    grunt.task.run('notify_hooks');
    grunt.registerTask('default', ['sass', 'concat', 'uglify', 'watch']);
    grunt.registerTask('app_change', ['concat:app', 'uglify:app', 'uglify:main']);
    grunt.registerTask('concat_change', ['uglify:app']);
    grunt.registerTask('sass_change', ['sass']);
};
