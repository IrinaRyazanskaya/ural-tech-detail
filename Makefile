DOCKER_IMAGE = cr.yandex/crp4javlgtod0hm1kcho/utd-frontend
COMMIT_HASH = $(shell git rev-parse --short HEAD)
APP_VERSION = $(COMMIT_HASH)

.PHONY: docker-build
docker-build:
	docker build --tag $(DOCKER_IMAGE):$(APP_VERSION) .

.PHONY: docker-push
docker-push:
	docker push $(DOCKER_IMAGE):$(APP_VERSION)

.PHONY: docker-run
docker-run:
	docker run \
		-it \
		--rm \
		-p 8080:80 \
		-p 8443:443 \
		$(DOCKER_IMAGE):$(APP_VERSION)
