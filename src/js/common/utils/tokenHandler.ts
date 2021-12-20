import axios from "axios";

export function attachInterceptor(networkInstance: any) {
    networkInstance.interceptors.response.use(undefined, async (err: any) => {
        let isFetchingToken = false;
        const originalRequest = err.config;

        if (err.response.status === 401 && !isFetchingToken) {
            originalRequest._retry = true;
            const rTokenResponse = await refreshToken();

            networkInstance.defaults.headers.Authorization = rTokenResponse.data.access_token;
            originalRequest.headers.Authorization = rTokenResponse.data.access_token;
            return networkInstance(originalRequest);
        }

        return Promise.reject(err);
    })

}

// for project List Api
async function refreshToken() {
    try {
        // const refreshToken = localStorage.getItem('refreshToken');
        const refreshToken = "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.gh2M-j66s8EC-bN7r-znnqQ5O3GDKLDRpdgo_HS5eB35kKDs3PH6fH29712yhUvEL3A1TpA8-tRa9LiOn1XxmxBHpaOI0ENhnU3NozO86a2LqRMpIpOHhm1AFqqidBOA0dIdMWLHpzrIpiEJcsqZibkXcF6_I3g0qH0REQ9CGfFEjcqb_zUegxAWTtt7EVvjyVXBEOJwlXZxdpSmkGEk79jgK8GGjOFNctKpsPnaROQHteaqYeo62wgrukCx1B36YEjJsXB0P_9yY6BEGw1MGE3Y7wuIF7LFFhTAt2OGDhdICVzCdrGeLmZPmUDSLzkbXFoCg8cICFJy6KmPGKGjrw.ZqltPiC1-Xh321e3.Yjtgyj7kiTswWvgB7rmq8_vRDfFORFuxHxOP6R4-iN6koRbyQMFRnLbKg9Tlz8uQkz29prce8We8KNBPqzMHnJ3ZlvN1DeklIAob2i5qeNca1N3Dz_nukjlHDbhqnrHLOXobSeyH8lJOzVEAJaAD2VdUnABlL2XTLx8RkvNrtr-AlsfQX97LcLJ_43cji_2iCTQhthHuuuKtyDZu8izwNC4AfCPnYOrOF7Uw8fK1Uu-e3NxCHMT8xSkEB7LjpP39w6g1wmcMO0JSIMxe_1f0f_C8jzxANeC3PSVX35OYluF7nbsJSgmkmaobqfU_b0b_2xFntvw_3MyGgRP0Yqnk8QvhDp9Z6y8--1E9bubiHBmBLDVZWEEYCDunt0s_u26rgYRCUkTFchDVR6pbVNsj-RkWM-YhNtSApfJ7lbFXdbtqnwUgxF3F6i84P4teS6DuTiTflTbRMeXmqZXOW2Y6DZ9FLnDxiA0K7s6WO8gnAFN228fg19GCz7GS-uUEeGe26eIe6LNHbGb99x1C9ALnX5zHaPmewEOMHDSsFzcOkKMQmNl-OxgFLUxyfr4-u7Xn7EeIKJwgXv2DQRuKnkaKNJJ1ehS2oq_TVkln-s0Sv56zWPiY5oiDLhtkHzQK4-gXqPqhcQ_0FM7rD6tvxIrHKQNzDIDU8wJTa6zea7RoeicsbcMzqv-mNsmhrzfVnVTyoR4hccHhDNha2eFA9-Y6VgnWM5jTkS7g4vUZzQHRm_imWJMX8-CluT4xGF2-DmfnoZYuOOQcgDjj2I_gwPVNeK-fa2BquqcUPPjPdk43orn9NTX3-tTFXhqj20QCvNwCtyTEvspWHapJNHFutschHFvNASNNstpeWOScMqH5AvEYju4ILBHf38W1J6BgyE5SssETr5InmyvRt7I20TUmmUEmJT_mWwi-ylVNRYmZkF0pWFbtutffSTDKXyqXeFgp8BSiKqBiptp1KSzSBIPIuQrJabXZ0psiFOhzy4aBoVsvZDjCy-0uQQEASs1dSWlGN-5ZnTInkDNjfv3VvOMAaWLzzRn9wRDKDQO5jUeUFoTfyDi9QEora8ZMisajwQyJMAFcsovQjftLzmvxK1DYtB1aXydtXLeK7LQoCfuE3MSP79ksD0V00QGVcnzDCnYWoQgdXEs1xVNCov-dFvCYUKbE8EOrWkXDFvjbkNzwc2oFxEDUpmIsr70vTK8rc57XbsqSUbj7AdIeXvH7xtW8l_EOhQrK17KWWFbdb1wW51MwL9IZz4ogtwXiaLpTRA63tmwUXg1Pm2_KHX2tUs7TcarYQSbcJQ.aeJHbxhC7S2Tfn8ajbuesQ";

        const payload = {
            method: 'POST',
            url: "https://console.smartclean.io/api/auth/login/token",
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                rtoken: refreshToken
            })
        };

        const rToken = await axios(payload);
        // let newAccessToken = rToken.data.identity_token;
        // localStorage.setItem('token', newAccessToken);

        return rToken;
    } catch (e) {
        return e;
    }
}