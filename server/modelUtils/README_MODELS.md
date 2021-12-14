# Return type of models
The the model utility functions will return the following interface that should be used in controllers:
```typescript
interface modelReturn {
  status: 'success' | 'error';
  error: null | error; // error message due to failure of operation
  payload?: any // this can be any data that needs to be passed back to the controller. It is an optional field
}
```