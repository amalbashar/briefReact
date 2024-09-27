import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../assets/css/UserDashboard.css'; // مسار الـ CSS المعدل

const UserDashboardComponent = ({ userData }) => {
    return (
        <div>
            <h2>Welcome, {userData.user.name}!</h2>
            <p>Email: {userData.user.email}</p>
            <p>Phone: {userData.user.phone}</p>
        </div>
    );
};

const SubscriptionDashboardComponent = ({ subscriptions }) => {
    const getRemainingDays = (endDate) => {
        const end = new Date(endDate);
        const today = new Date();
        const diffTime = end - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    const getAlertClass = (remainingDays) => {
        if (remainingDays <= 3) {
            return 'alert-danger'; // اللون الأحمر
        } else if (remainingDays <= 10) {
            return 'alert-warning'; // اللون الأصفر
        } else {
            return 'alert-success'; // اللون الأخضر
        }
    };

    return (
        <div className="subscription-container">
            <h3>Your Subscriptions</h3>
            <div className="subscription-cards">
                {subscriptions.length > 0 ? (
                    subscriptions.map((subscription, index) => {
                        const remainingDays = getRemainingDays(subscription.end_date);
                        return (
                            <div key={index} className="subscription-card">
                                <h4>Subscription {index + 1}</h4>
                                <p><strong>Start Date:</strong> {subscription.start_date}</p>
                                <p><strong>End Date:</strong> {subscription.end_date}</p>
                                <p><strong>Status:</strong> {subscription.status}</p>
                                <p><strong>Delivery Info:</strong> {subscription.delivery_info}</p>

                                {/* إضافة التنبيه بناءً على عدد الأيام المتبقية */}
                                <div className={`alert ${getAlertClass(remainingDays)}`} role="alert">
                                    {remainingDays <= 0 
                                        ? 'Your subscription has expired.'
                                        : `You have ${remainingDays} days left.`}
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p>No subscriptions found</p>
                )}
            </div>
        </div>
    );
};

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activePage, setActivePage] = useState('userDashboard'); // للتحكم في الصفحة النشطة

    useEffect(() => {
        axios.get('http://localhost:8000/api/user')
            .then(response => {
                console.log(response.data); // طباعة البيانات للتحقق
                setUserData(response.data); // تعيين البيانات المسترجعة للحالة
                setLoading(false); // إيقاف التحميل
            })
            .catch(error => {
                console.error("There was an error fetching the user data!", error);
                setLoading(false); // إيقاف التحميل حتى عند حدوث خطأ
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>; // عرض رسالة أثناء تحميل البيانات
    }

    if (!userData) {
        return <div>No data found</div>; // إذا لم يتم العثور على بيانات
    }

    return (
        <div className="dashboard-container">
            <div className="profile-section">
                <img className="profile-image" src="https://via.placeholder.com/150" alt="Profile" />
            </div>
            <div className="content-section">
                <div className="button-container">
                    <button
                        className={`dashboard-button ${activePage === 'userDashboard' ? 'active' : ''}`}
                        onClick={() => setActivePage('userDashboard')}
                    >
                        User Dashboard
                    </button>
                    <button
                        className={`dashboard-button ${activePage === 'subscriptionDashboard' ? 'active' : ''}`}
                        onClick={() => setActivePage('subscriptionDashboard')}
                    >
                        Subscription Dashboard
                    </button>
                </div>

                <div className="dashboard-content">
                    {activePage === 'userDashboard' ? (
                        <UserDashboardComponent userData={userData} />
                    ) : (
                        <SubscriptionDashboardComponent subscriptions={userData.subscriptions} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
