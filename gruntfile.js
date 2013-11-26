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
                    'public/js/plugins.min.js': ['<%= concat.plugins.dest %>']
                    //'drupal/sites/all/themes/theme_name/js/plugins.min.js': ['<%= concat.plugins.dest %>']
                }
            },
            app : {
                files: {
                    'public/js/app.min.js': ['<%= concat.app.dest %>']
                    //'drupal/sites/all/themes/theme_name/js/app.min.js': ['<%= concat.app.dest %>']
                }
            },
            main : {
                files: {
                    'public/js/main.min.js': ['js/main.js']
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
                    outputStyle: 'expanded'
                },
                files: {
                    'css/app-unprefixed.css': 'scss/app.scss'
                }        
            }
        },
        // Prefix the CSS
        autoprefixer: {
            options: {
                browsers: ["last 2 versions", "> 1%", "ie 8", "ie 7"]
            },
            your_target: {
                options: {
                    flatten: true
                },
                src: 'css/app-unprefixed.css',
                dest: 'public/css/app.css'
            },
        },
        // Minify CSS
        cssmin: {
            minify: {
                expand: true,
                cwd: 'public/css/',
                src: ['*.css', '!*.min.css'],
                dest: 'public/css/',
                ext: '.min.css'
            },
        },
        //- Notify when task is complete
        notify: {
            css_compile: {
                options: {
                    title: 'SASS',  // optional
                    message: 'Compile was successful', //required
                }
            },
            css_prefixed: {
                options: {
                    title: 'CSS AutoPrefixer',  // optional
                    message: 'Prefix was successful', //required
                }
            },
            app_change: {
                options: {
                    title: 'Javascript',  // optional
                    message: 'Concatenatated and minifed successfully', //required
                }
            },
            css_min: {
                options: {
                    title: 'CSS Minified',  // optional
                    message: 'Minifed successfully', //required
                }
            },
        },
        //- Watchers
        watch: {
            grunt: { 
                files: ['gruntfile.js'],
                tasks: ['default'] 
            },
            sass: {
                files: ['scss/{,*/}*.scss'],
                tasks: ['sass_change']
            },
            css: {
                files: [/*'drupal/sites/all/themes/theme_name/css/*.css',*/ 'css/*.css'],
                tasks: ['notify:css_compile', 'css_prefixed']
            },
            prefix: {
                files: [/*'drupal/sites/all/themes/theme_name/css/*.css',*/ 'public/css/*.css'],
                tasks: ['notify:css_min']
            },
            js: {
                files: ['<%= concat.app.src %>', 'js/main.js'],
                tasks: ['notify:app_change','app_change']                
            }
        }
    });
    //- REGISTER ALL OUR GRUNT TASKS
    grunt.task.run('notify_hooks');
    grunt.registerTask('default', ['autoprefixer','sass','cssmin', 'concat', 'uglify', 'watch']);
    grunt.registerTask('app_change', ['concat:app', 'uglify:app', 'uglify:main']);
    grunt.registerTask('concat_change', ['uglify:app']);
    grunt.registerTask('sass_change', ['sass']);
    grunt.registerTask('css_prefixed', ['autoprefixer']);
    grunt.registerTask('css_min', ['cssmin']);
};
