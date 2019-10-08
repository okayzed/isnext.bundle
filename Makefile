bundle:
				browserify src/js/main.js -o build/main.bundle.js
				cp src/html/index.html build/index.html
