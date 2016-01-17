import { injectAsyncReducer } from './store'

function errorLoading(err) {
  console.error('Dynamic page loading failed', err) // eslint-disable-line no-console
}

function loadModule(cb) {
  return (module) => cb(null, module.default)
}

function loadReducer(store, name) {
  return (module) => injectAsyncReducer(store, name, module.default)
}

export default function createRoutes(store) {
  return [
    {
      path: '/',
      getComponent(location, cb) {
        Promise.all([
          System.import('containers/HomePage/reducer'),
          System.import('containers/HomePage'),
        ]).then(modules => {
          loadReducer(store, 'home')(modules[0])
          loadModule(cb)(modules[1])
        }).catch(errorLoading)
      },
    }, {
      path: '*',
      getComponent(location, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading)
      },
    },
  ]
}
