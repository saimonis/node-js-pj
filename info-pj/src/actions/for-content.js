const data = []


for (let i = 0; i < 23; i++) {
    data.push({
        id:i,
        href: `/${i}`,
        title: `ant design part ${i}`,
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}

export const getData = (dispatch) => {
    let items = [];

     setTimeout(()=>{
        items=data
         dispatch({
             type:"FETCH_DATA_SUCCESS",
             payload:items
         })

    },2000)
}
export const getDataSaga = () => {
   return  {
        type:"FETCH_DATA_SUCCESS",
            payload:data
    }
}

export const getDataThunk = ()=>(dispatch,getState) => {
    let items = [];
    console.log('thunk',getState())
    setTimeout(()=>{
        items=data
        dispatch({
            type:"FETCH_DATA_SUCCESS",
            payload:items
        })

    },2000)
}

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}
export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}