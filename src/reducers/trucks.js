const defaultTrucks = [
    'MAN',
    'Mercedes'
];

export default function getReducers(state = defaultTrucks, action) 
{
    if(action.type === 'ADD_TRUCK') 
    {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}