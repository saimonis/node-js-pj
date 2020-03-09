import React,{useEffect, useState} from "react";
import {List, Row, Col} from "antd";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getData, getDataThunk, getDataSaga} from "../actions/for-content"

const list_options = (data)=> ({
    dataSource:data,
    itemLayout:"vertical",
    size:"large",
    pagination: {
        onChange: page => {
            console.log(page);
        },
        pageSize: 32,
    },
    loading: false,
    size:"large",
    grid:{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3,
    },

});
const ListPage = (props) => {
    console.log(props);
    const [data,setData] = useState([])
    useEffect(()=>{
       props.getData();
    },[])
    return (
        <>
            <Row>
                <Col span={24} style={{padding:"10px"}}>
            <List
                {...list_options(props.data)}
                renderItem={item => (
                    <Col span={12}>
                    <List.Item
                        key={item.title}
                    >
                        <List.Item.Meta
                            title={<Link to={`/${item.id}`}>{item.title} {item.id}</Link>}
                        />
                    </List.Item>
                    </Col>
                )}
            />
                </Col>
            </Row>
        </>
    );
};

const mapStateToProps = ({data})=>({data});
const mapDispatchToProps = (dispatch)=>({
    getData:()=>{dispatch(getDataSaga())}
});


export default connect(mapStateToProps,mapDispatchToProps)(ListPage)
