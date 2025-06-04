import Checkbox from "@/Components/Common/Checkbox";
import InputError from "@/Components/Common/InputError";
import InputLabel from "@/Components/Common/InputLabel";
import PrimaryButton from "@/Components/Common/PrimaryButton";
import TextInput from "@/Components/Common/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { motion } from "framer-motion";
import { Lock, Mail } from "lucide-react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-md bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl"
                >
                    <h2 className="text-2xl font-extrabold text-center text-green-800 mb-6">
                        Selamat Datang Kembali
                    </h2>

                    {status && (
                        <div className="mb-4 text-sm font-medium text-green-600">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <InputLabel htmlFor="email" value="Email" />
                            <div className="relative mt-1">
                                <span className="absolute inset-y-0 left-3 flex items-center text-green-600">
                                    <Mail size={18} />
                                </span>
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="pl-10 w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                            </div>
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel htmlFor="password" value="Password" />
                            <div className="relative mt-1">
                                <span className="absolute inset-y-0 left-3 flex items-center text-green-600">
                                    <Lock size={18} />
                                </span>
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="pl-10 w-full"
                                    autoComplete="current-password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />
                            </div>
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                />
                                <span className="ms-2 text-sm text-gray-600">
                                    Ingat saya
                                </span>
                            </label>

                            {canResetPassword && (
                                <Link
                                    href={route("password.request")}
                                    className="text-sm text-green-600 hover:underline focus:outline-none"
                                >
                                    Lupa password?
                                </Link>
                            )}
                        </div>

                        <PrimaryButton
                            className="w-full justify-center"
                            disabled={processing}
                        >
                            Masuk
                        </PrimaryButton>
                    </form>
                </motion.div>
            </div>
        </GuestLayout>
    );
}
