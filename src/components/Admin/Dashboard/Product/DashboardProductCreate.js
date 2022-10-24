import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

export default function DashboardProductCreate(props) {

    const createForm = useRef();
    const cateInput = useRef(); 
    const [isCheckedSmall, setIsCheckedSmall] = useState(false);
    const [isCheckedMedium, setIsCheckedMedium] = useState(false);
    const [isCheckedLarge, setIsCheckedLarge] = useState(false);
    const [inputValue, setInputValue] = useState([])
    const [cate, setCate] = useState([])
    const [cateValue, setCateValue] = useState("") 
    const [file, setFile] = useState([]) 
    const [productCateList, setProductCateList] = useState([])

    const [productImg, setProductImg] = useState([])

    const handleOnChange = (event) => {
        setInputValue({...inputValue, [event.target.name]: event.target.value})
    }
    
    useEffect(()=> {
        axios.get(`http://localhost:27017/products`)
            .then(res => {
                const test = Object.values(res.data.reduce((a, {productCate}) => {
                    a[productCate] = a[productCate] || {productCate};
                    return a;
                }, Object.create(null)));
                setProductCateList(test)
            }
        ) 
    },[])

    const onSubmit = (event) => {
        event.preventDefault()
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        const formData = new FormData();

        const imageArr = Array.from(file);
        imageArr.forEach(image => {
            formData.append('productImg', image);
        });

        formData.append("productName", inputValue.name);
        formData.append("productSale", inputValue.sale);
        formData.append("productPrice", inputValue.price);
        formData.append("productCate", cateValue);  
        formData.append("productDes", inputValue.des); 
        formData.append("productDate", new Date());
        axios.post('http://localhost:4000/products', formData, config)
        props.setCloseCreateFunc(false);
        props.setToastFunc(true);
    }

    const addNewCate = () => {
        axios.post('http://localhost:4000/category', {
            cateName: inputValue.cate
        })
        setCate(cate=>[...cate, {cateName: inputValue.cate}])
        setCateValue(inputValue.cate)
        cateInput.current.value = ""
    } 
    
    const deleteImg = (event) => {
        const virutalFile = [...file]
        virutalFile.splice(event.target.id, 1)
        setFile(virutalFile)

        const items = [...productImg]
        items.splice(event.target.id, 1)
        setProductImg(items)
    }

    return (
        <div className="DashboardProductInfo">
            <div className="create-box"> 
                <div className="create-box-title flex">
                    <div className="create-box-title-text">
                        Product infomation
                    </div>
                    <div  
                        className="create-box-title-close flex-center"
                        onClick={()=>{
                            props.setCloseCreateFunc(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faTimes}/>
                    </div>
                </div>
                <form onSubmit={onSubmit} encType="multipart/form-data" ref={createForm}>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Name</div>
                        <div className="dashboard-right">
                            <input type="text" name="name" onChange={handleOnChange} required></input>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Images </div>
                        <div className="dashboard-right">
                            <input 
                                onChange={(event) => {
                                    const files = event.target.files;
                                    for (let i = 0; i< files.length; i++) {
                                        setProductImg(product=>[...product, URL.createObjectURL(files[i])])
                                    }
                                    const fileArr = Array.prototype.slice.call(files)
                                    fileArr.forEach(item=>{
                                        
                                        setFile(file=>[...file, item])
                                    })
                                }}
                                type="file"
                                name="productImg"
                                className="noborder"
                                multiple="multiple"
                                style={{height: '50px'}}
                            ></input>
                            <div className="flex" style={{ overflowY: 'hidden', flexWrap:'wrap'}}>
                                { productImg && 
                                    productImg.map((item, index) => {
                                        return (
                                            <div key={index} className="create-box-img">
                                                <img key={index} src={item} alt=""></img>
                                                <div 
                                                    className="create-box-img-overlay"
                                                >
                                                    <p
                                                        id={index}
                                                        onClick={deleteImg}
                                                        className="icon">X
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Defaut price </div>
                        <div className="dashboard-right">
                            <input type="number" name="price" placeholder="USD" onChange={handleOnChange} required></input>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Sale off </div>
                        <div className="dashboard-right flex-center">
                            <input type="number" placeholder="%" style={{ width: "100px"}} onChange={handleOnChange} name="sale" required></input>
                            <label>From: </label>
                            <input type="date"  name="fromdate" onChange={handleOnChange} placeholder="dd/mm/yyyy" pattern="(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)"/>
                            <label>To: </label>
                            <input type="date"  name="todate" onChange={handleOnChange} placeholder="dd/mm/yyyy" pattern="(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)"/>
                        </div>
                    </div> 
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Category </div>
                        <div className="dashboard-right flex-center">
                            <select style={{ width: "350px"}} 
                                onChange={(event) => {setCateValue(event.target.value)}}
                                value={cateValue}>
                                <option></option>
                                { cate.length > 0 &&
                                    cate.map((item, index) => {
                                        return(
                                            <option key={index}>{item.cateName}</option>
                                        )
                                    })
                                }
                            </select>
                            <input type="text" name="cate" placeholder="New category?" style={{  margin:'0 10px'}} onChange={handleOnChange} ref={cateInput}></input>
                            <div className="btn" style={{
                                fontSize: '14px',
                                fontFamily: 'sans-serif',
                                fontWeight: '300',
                                padding: '0 10px',
                                cursor: 'pointer',
                                width: '350px',
                                height: '30px'
                            }}
                            onClick={addNewCate}>
                                Add
                            </div>
                        </div>
                    </div>  
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Description </div>
                        <div className="dashboard-right">
                            <input type="text" name="des" onChange={handleOnChange} required></input>
                        </div>
                    </div>

                    <div className="flex-center" style={{marginTop: '40px'}}>
                    <button className="create-box-btn btn">
                        Add product
                    </button>
                </div>
                </form>
            </div>
        </div>
    )
}