const defaultStatesCars = [
    'BMW X7',
    'Mercedes GLA'
  ];

export default function getReducers(state = defaultStatesCars, action) 
{
  if(action.type === 'ADD_CAR') 
  {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}