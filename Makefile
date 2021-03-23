install: install-deps

run:
	bin/nodejs-package.js 10

build:
	npm run build

install-deps:
	npm ci

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

publish:
	npm publish

.PHONY: test

prePublish:
	npm release -- --release-as patch
	git push --follow-tags origin dev

.PHONY: test
