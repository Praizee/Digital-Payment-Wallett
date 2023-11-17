import Faq from 'react-faq-component';


const FaqComponent = () => {
    const data = {
        // title: "FAQ (How it works)",
        rows: [
            {
                title:
                    <h1 className='font-semibold text-gray-900'>
                        How can I add money to my wallet?
                    </h1>,
                content:
                    <p className='py-2 text-gray-600'>
                        You can add money to your wallet by linking
                        your bank account or credit/debit card, and
                        then using the "Add Money" feature within the app. <br />
                        <b>OR</b> through Bank Transfers.
                    </p>,
            },
            {
                title:
                    <h1 className='font-semibold text-gray-900'>
                        How can I purchase data?
                    </h1>,
                content:
                    <p className='py-2 text-gray-600'>
                        STEP 1: Fund your wallet. <br />
                        STEP 2: Fill the data order form. <br />
                        STEP 3: Wait for 5 - 15 minutes, the recipient
                        will receive notification(s) of data recharge
                    </p>,
            },
            {
                title:
                    <h1 className='font-semibold text-gray-900'>
                        Is my money safe in this wallet?
                    </h1>,
                content:
                    <p className='py-2 text-gray-600'>
                        Yes, your money is secure. We use advanced
                        encryption and security measures to protect
                        your funds. Additionally, we are regulated
                        by [relevant financial authorities] to ensure
                        the safety of your transactions.
                    </p>,
            },
            {
                title:
                    <h1 className='font-semibold text-gray-900'>
                        What should I do if I forget my password or PIN?
                    </h1>,
                content:
                    <p className='py-2 text-gray-600'>
                        If you forget your password or PIN, you can reset
                        it by clicking on the "Forgot Password" or
                        "Forgot PIN" link on the login page. Follow
                        the instructions sent to your registered email
                        or phone number to create a new one.
                    </p>,
            },
            {
                title:
                    <h1 className='font-semibold text-gray-900'>
                        How do I send money to someone using this app?
                    </h1>,
                content:
                    <p className='py-2 text-gray-600'>
                        To send money, go to the "Send Money"
                        or "Transfer" section, enter the recipient's
                        details, and the amount you want to send.
                        Verify the information, and then confirm
                        the transaction.
                    </p>,
            },
            {
                title:
                    <h1 className='font-semibold text-gray-900'>
                        What do I do if my transaction fails or if I encounter an issue?
                    </h1>,
                content:
                    <p className='py-2 text-gray-600'>
                        If your transaction fails or you face
                        any issues, please contact our customer
                        support at [customer support email/phone number].
                        Our team is available to assist you.
                    </p>,
            },
            {
                title:
                    <h1 className='font-semibold text-gray-900'>
                        How can I protect my account from unauthorized access?
                    </h1>,
                content:
                    <p className='py-2 text-gray-600'>
                        To protect your account, make sure
                        to set a strong password, enable
                        two-factor authentication, and avoid
                        sharing your login credentials with anyone.
                        Be cautious of phishing attempts and only
                        download the app from official sources.
                    </p>,
            },

        ]
    }


    return (
        <div className="select-none text-gray-500">
            <Faq data={data} />
        </div>
    )
}

export default FaqComponent