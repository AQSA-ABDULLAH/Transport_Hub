import React from 'react';

const SuccessPage = () => {
    const styles = {
        body: {
            background: '#dcf0fa',
        },
        container: {
            maxWidth: '380px',
            margin: '50px auto',
            overflow: 'hidden',
        },
        printerTop: {
            zIndex: '1',
            border: '6px solid #666666',
            height: '6px',
            borderBottom: '0',
            borderRadius: '6px 6px 0 0',
            background: '#333333',
        },
        printerBottom: {
            zIndex: '0',
            border: '6px solid #666666',
            height: '6px',
            borderTop: '0',
            borderRadius: '0 0 6px 6px',
            background: '#333333',
        },
        paperContainer: {
            position: 'relative',
            overflow: 'hidden',
            height: '467px',
        },
        paper: {
            background: '#ffffff',
            fontFamily: 'Poppins, sans-serif',
            height: '447px',
            position: 'absolute',
            zIndex: '2',
            margin: '0 12px',
            marginTop: '-12px',
            animation: 'print 5000ms cubic-bezier(0.68, -0.55, 0.265, 0.9) infinite',
            MozAnimation: 'print 5000ms cubic-bezier(0.68, -0.55, 0.265, 0.9) infinite',
        },
        mainContents: {
            margin: '0 12px',
            padding: '24px',
        },
        jaggedEdge: {
            position: 'relative',
            height: '20px',
            width: '100%',
            marginTop: '-1px',
        },
        jaggedEdgeAfter: {
            content: '""',
            display: 'block',
            position: 'absolute',
            left: '0',
            right: '0',
            height: '20px',
            background: 'linear-gradient(45deg, transparent 33.333%, #ffffff 33.333%, #ffffff 66.667%, transparent 66.667%), linear-gradient(-45deg, transparent 33.333%, #ffffff 33.333%, #ffffff 66.667%, transparent 66.667%)',
            backgroundSize: '16px 40px',
            backgroundPosition: '0 -20px',
        },
        successIcon: {
            textAlign: 'center',
            fontSize: '48px',
            height: '72px',
            background: '#359d00',
            borderRadius: '50%',
            width: '72px',
            height: '72px',
            margin: '16px auto',
            color: '#fff',
        },
        successTitle: {
            fontSize: '22px',
            fontFamily: 'Poppins, sans-serif',
            textAlign: 'center',
            color: '#666',
            fontWeight: 'bold',
            marginBottom: '16px',
        },
        successDescription: {
            fontSize: '15px',
            fontFamily: 'Poppins, sans-serif',
            lineHeight: '21px',
            color: '#999',
            textAlign: 'center',
            marginBottom: '24px',
        },
        orderDetails: {
            textAlign: 'center',
            color: '#333',
            fontWeight: 'bold',
        },
        orderNumberLabel: {
            fontSize: '18px',
            marginBottom: '8px',
        },
        orderNumber: {
            borderTop: '1px solid #ccc',
            borderBottom: '1px solid #ccc',
            lineHeight: '48px',
            fontSize: '48px',
            padding: '8px 0',
            marginBottom: '24px',
        },
        complement: {
            fontSize: '18px',
            marginBottom: '8px',
            color: '#32a852',
        },
        '@keyframes print': {
            '0%': {
                transform: 'translateY(-90%)',
            },
            '100%': {
                transform: 'translateY(0%)',
            },
        },
        '@-webkit-keyframes print': {
            '0%': {
                WebkitTransform: 'translateY(-90%)',
            },
            '100%': {
                WebkitTransform: 'translateY(0%)',
            },
        },
        '@-moz-keyframes print': {
            '0%': {
                MozTransform: 'translateY(-90%)',
            },
            '100%': {
                MozTransform: 'translateY(0%)',
            },
        },
        '@-ms-keyframes print': {
            '0%': {
                MsTransform: 'translateY(-90%)',
            },
            '100%': {
                MsTransform: 'translateY(0%)',
            },
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.printerTop}></div>

            <div style={styles.paperContainer}>
                <div style={styles.printerBottom}></div>

                <div style={styles.paper}>
                    <div style={styles.mainContents}>
                        <div style={styles.successIcon}>&#10004;</div>
                        <div style={styles.successTitle}>Payment Complete</div>
                        <div style={styles.successDescription}>Thank you for completing the payment! You will shortly receive an email of your payment.</div>
                        <div style={styles.orderDetails}>
                            
                            <div style={styles.complement}>Thank You!</div>
                        </div>
                    </div>
                    <div style={styles.jaggedEdge}></div>
                </div>
            </div>
        </div>
    );
};

export default SuccessPage;
