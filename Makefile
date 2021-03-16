install: install-deps

build:
	rm -rf dist
	npm run build

install-deps:
	npm ci

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

test-watch:
	npm test -- --watchAll

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .

prePublish:
	npm release -- --release-as patch
	git push --follow-tags origin dev

publish:
	npm publish

.PHONY: test
