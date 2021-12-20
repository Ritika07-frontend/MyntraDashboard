export const getApiConfig = (url: any, type: any, data='', params='', header='') => {
    /**
     * Config function to create a config object as per the inputs.
     * This object is passed to API once set.
     */
        const config: any = {
            method: type,
            url: url,
            headers: {
                'Content-Type': 'application/json',
            },
        }
        if (data) {
            config['data'] = data;
        }
        if (header) {
            Object.keys(header).map((key: any) => (
                config['headers'][key] = header[key]
            ));
        }
        let parameter = '';
        if (params) {
            Object.keys(params).map((key: any) => (
                parameter = `${parameter}${key}=${params[key]}&`
            ))
            config['url'] = `${config['url']}?${parameter}`;
        }
        return config;
    }
