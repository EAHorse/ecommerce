const FormatPrice = (price) => {
    const validPrice = Number(price) || 0;
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(validPrice);
};

export default FormatPrice;