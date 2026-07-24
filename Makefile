.DEFAULT_GOAL := help
.PHONY: help install dev build preview typecheck deploy clean nuke

help: ## Show this help
	@awk 'BEGIN {FS = ":.*##"} /^[a-zA-Z_-]+:.*?##/ {printf "  \033[36m%-12s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install dependencies (npm ci, falls back to npm install)
	npm ci || npm install

dev: ## Start the Vite dev server
	npm run dev

build: ## Typecheck and build for production into dist/
	npm run build

preview: ## Serve the production build locally
	npm run preview

typecheck: ## Run the TypeScript compiler with no emit
	npm run typecheck

deploy: ## Build and publish dist/ to the gh-pages branch
	npm run deploy

clean: ## Remove build output
	rm -rf dist

nuke: clean ## Remove build output and node_modules
	rm -rf node_modules
