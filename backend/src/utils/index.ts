export const generateResponse = (data: any) => {
    // Function to generate a standardized response format
    return {
        success: true,
        data,
    };
};

export const handleError = (error: any) => {
    // Function to handle errors and return a standardized error response
    return {
        success: false,
        message: error.message || 'An unexpected error occurred',
    };
};