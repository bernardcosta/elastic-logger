MAKEFLAGS += --silent
SHELL = /bin/bash -o pipefail

MAKEFLAGS += --silent

include .env

default:
	${MAKE} help

help:
	sed -rn 's/^([a-zA-Z0-9_-]+):.*?##(.*).*?## (.*)/'$$(tput setaf 99)'make '$$(tput setaf 99)$$(tput bold)'\1|'$$(tput setaf 96)'\2'$$(tput sgr0)'|\3/p' < $(or ${makefile}, Makefile) | sort | column -t -s "|"

update: ## ## Shortcut to update repository and restart app
	docker-compose ps && git pull && npm install && docker-compose up -d node && docker-compose restart node
	docker-compose ps
