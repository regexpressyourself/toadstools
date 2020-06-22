build:
	cd front; \
	yarn build;
start:
	cd front; \
	yarn start;
deno:
	denon run --allow-net --allow-read --allow-env back/serve.ts;
