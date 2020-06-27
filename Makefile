install:
	cd front; \
	yarn;
build:
	cd front; \
	yarn build;
start:
	cd front; \
	yarn start;
denon:
	denon run --allow-net --allow-read --allow-env back/toadstools.ts;
deno:
	deno run --allow-net --allow-read --allow-env back/toadstools.ts;
