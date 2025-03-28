/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProductsRouteImport } from './routes/products/route'
import { Route as IndexImport } from './routes/index'
import { Route as ProductsIndexImport } from './routes/products/index'
import { Route as ProductsIdImport } from './routes/products/$id'

// Create/Update Routes

const ProductsRouteRoute = ProductsRouteImport.update({
  id: '/products',
  path: '/products',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProductsIndexRoute = ProductsIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => ProductsRouteRoute,
} as any)

const ProductsIdRoute = ProductsIdImport.update({
  id: '/$id',
  path: '/$id',
  getParentRoute: () => ProductsRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/products': {
      id: '/products'
      path: '/products'
      fullPath: '/products'
      preLoaderRoute: typeof ProductsRouteImport
      parentRoute: typeof rootRoute
    }
    '/products/$id': {
      id: '/products/$id'
      path: '/$id'
      fullPath: '/products/$id'
      preLoaderRoute: typeof ProductsIdImport
      parentRoute: typeof ProductsRouteImport
    }
    '/products/': {
      id: '/products/'
      path: '/'
      fullPath: '/products/'
      preLoaderRoute: typeof ProductsIndexImport
      parentRoute: typeof ProductsRouteImport
    }
  }
}

// Create and export the route tree

interface ProductsRouteRouteChildren {
  ProductsIdRoute: typeof ProductsIdRoute
  ProductsIndexRoute: typeof ProductsIndexRoute
}

const ProductsRouteRouteChildren: ProductsRouteRouteChildren = {
  ProductsIdRoute: ProductsIdRoute,
  ProductsIndexRoute: ProductsIndexRoute,
}

const ProductsRouteRouteWithChildren = ProductsRouteRoute._addFileChildren(
  ProductsRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/products': typeof ProductsRouteRouteWithChildren
  '/products/$id': typeof ProductsIdRoute
  '/products/': typeof ProductsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/products/$id': typeof ProductsIdRoute
  '/products': typeof ProductsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/products': typeof ProductsRouteRouteWithChildren
  '/products/$id': typeof ProductsIdRoute
  '/products/': typeof ProductsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/products' | '/products/$id' | '/products/'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/products/$id' | '/products'
  id: '__root__' | '/' | '/products' | '/products/$id' | '/products/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ProductsRouteRoute: typeof ProductsRouteRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ProductsRouteRoute: ProductsRouteRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/products"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/products": {
      "filePath": "products/route.tsx",
      "children": [
        "/products/$id",
        "/products/"
      ]
    },
    "/products/$id": {
      "filePath": "products/$id.tsx",
      "parent": "/products"
    },
    "/products/": {
      "filePath": "products/index.tsx",
      "parent": "/products"
    }
  }
}
ROUTE_MANIFEST_END */
