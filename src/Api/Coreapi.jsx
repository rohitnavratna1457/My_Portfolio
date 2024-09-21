import { message } from 'antd'
import API from './Api'


// export const EmpLogin = async (values) => {
//     const response = await API.post('api/login', values,
//         { headers: { 'Content-Type': 'application/json' } }).catch(
//             err => message.error('Registration Failed')
//         )
//     return response ? response.data : {}
// }

// export const Empregister = async (values) => {
//     const response = await API.post('api/employee', values,
//         { headers: { 'Content-Type': 'application/json' } }).catch(
//             err => message.error('Registration Failed')
//         )
//     return response ? response.data : {}
// }

export const PostMessage = async (values) => {          
    console.log("sevice_data",values);
    const response = await API.post('api/Postmessegedata/', values,
        { headers: { 'Content-Type': 'application/json' } }).catch(
            err => message.error('Registration Failed')
        )
    return response ? response.data : {}
}

export const GetMessage = async() => {
    const response = await API.get(`api/Getmessegedata/`,
    {headers : {'Content-Type':'application/json'}}).catch(
        err => message.error('regisration failed.')
    )
    return response ? response.data: {}
}

// export const getMeasurementApi = async() => {
//     const response = await API.get(`api/getmeasurement/`,
//     {headers : {'Content-Type':'application/json'}}).catch(
//         err => message.error('regisration failed.')
//     )
//     return response ? response.data: {}
// }

// export const getGstRateApi = async() => {
//     const response = await API.get(`api/getgstrate/`,
//     {headers : {'Content-Type':'application/json'}}).catch(
//         err => message.error('regisration failed.')
//     )
//     return response ? response.data: {}
// }


// export const ProductdataTcategoryNameApi = async(formData) => {
//     const response = await API.post(`api/getProductDataC/`,formData,
//     {headers : {'Content-Type':'application/json'}}).catch(
//         err => message.error('regisration failed.')
//     )
//     return response ? response.data: {}
// }

// export const ProductCompanyApi = async(formData) => {
//     // alert()
//     const response = await API.post(`api/productcompany/`,formData,
//     {headers : {'Content-Type':'application/json'}}).catch(
//         err => message.error('regisration failed.')
//     )
//     return response ? response.data: {}
// }

// export const GetProductApi = async(formData) => {
//     const response = await API.post(`api/getPdataTcompany/`,formData,
//     {headers : {'Content-Type':'application/json'}}).catch(
//         err => message.error('regisration failed.')
//     )
//     return response ? response.data: {}
// }


// export const inventoryGetdata = async () => {
//     const response = await API.get('api/productdata',
//         { headers: { 'Content-Type': 'application/json' } }).catch(
//             err => message.error('Not Fetch')
//         )
//     return response ? response.data : {}

// }


// export const inventoryDelete = async (id) => {

//     const response = await API.delete(`api/productdata/${id}`,
//         { headers: { 'Content-Type': 'application/json' } }).catch(
//             err => message.error('Not delete')
//         )
//     return response ? response.data : {}
// }


// export const inventoryGetdataWithId = async (id) => {
//     const response = await API.get(`api/productdata/${id}`,
//         { headers: { 'Content-Type': 'application/json' } }).catch(
//             err => message.error('Not Fetch')
//         )
//     return response ? response.data : {}
// }


// export const inventoryUpdateWithId = async (id, putData) => {
//     const response = await API.put(`api/productdata/${id}`, putData,
//         { headers: { 'Content-Type': 'application/json' } }).catch(
//             err => message.error('Not Fetch')
//         )
//     return response ? response.data : {}

// }


// export const Add_New_Company = async(formData) => {
//     const response = await API.post(`api/addcompany/`,formData,
//     {headers : {'Content-Type':'application/json'}}).catch(
//         err => message.error('regisration failed.')
//     )
//     return response ? response.data: {}
// }

// export const Get_Company_Name = async() => {
//     const response = await API.get(`api/addcompany/`,
//     {headers : {'Content-Type':'application/json'}}).catch(
//         err => message.error('regisration failed.')
//     )
//     return response ? response.data: {}
// }


// export const Add_New_Category = async(formData) => {
//     const response = await API.post(`api/addcategory/`,formData,
//     {headers : {'Content-Type':'application/json'}}).catch(
//         err => message.error('regisration failed.')
//     )
//     return response ? response.data: {}
// }

// export const Add_New_Company_in_model = async(formData) => {
//     console.log("mama" , formData);
//     const response = await API.post(`api/addcompany/`,formData,
//     {headers : {'Content-Type':'application/json'}}).catch(
//         err => message.error('regisration failed.')
//     )
//     return response ? response.data: {}
// }


// // purchase invoice page

// export const getProductNameApi = async(formData) => {
//     // alert()
//     const response = await API.post(`api/getProductDataPurchaseInvoice/`,formData,
//     {headers : {'Content-Type':'application/json'}}).catch(
//         err => message.error('regisration failed.')
//     )
//     return response ? response.data: {}
// }

// export const getProductDataApi = async(formData) => {
//     // alert()
//     const response = await API.post(`api/getProductName/`,formData,
//     {headers : {'Content-Type':'application/json'}}).catch(
//         err => message.error('regisration failed.')
//     )
//     return response ? response.data: {}
// }


// export const getProductDataCalculation = async(formData) => {
//     // alert()
//     const response = await API.post(`api/calculation/`,formData,
//     {headers : {'Content-Type':'application/json'}}).catch(
//         err => message.error('regisration failed.')
//     )
//     return response ? response.data: {}
// }




// export const ProductSearchApi = async(formData) => {
//     // alert()
//     const response = await API.post(`search/`,formData,
//     {headers : {'Content-Type':'application/json'}}).catch(
//         err => message.error('regisration failed.')
//     )
//     return response ? response.data: {}
// }

