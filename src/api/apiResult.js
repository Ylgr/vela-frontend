class ApiResult {
    success(apiResponse) {
        return (typeof apiResponse.data == 'string') ? JSON.parse(apiResponse.data) : apiResponse.data
    }
}
const apiResult = new ApiResult();
export default apiResult;
