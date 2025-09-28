import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '/assets/images/logo-transparent.png';

const Footer = () => {
    type FooterLink = {
        name: string;
        href?: string;
        to?: string;
    };

    const footerLinks: Record<string, FooterLink[]> = {
        Services: [
            { name: 'Mobile Development', href: '#about' },
            { name: 'Web Development', href: '#about' },
            { name: 'Data Solutions', href: '#about' },
        ],
        Company: [
            { name: 'Our Philosophy', href: '#motto' },
            { name: 'About Us', href: '#about' },
        ],
        Legal: [
            { name: 'Privacy Policy', to: '/privacy-policy' },
            { name: 'Terms of Service', href: '#' },
            { name: 'Cookie Policy', href: '#' },
            { name: 'GDPR', href: '#' },
        ],
    };

    const socialLinks = [
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Github, href: 'https://github.com/BlipNode', label: 'GitHub', target: '_blank', rel: 'noopener noreferrer' },
    ];

    return (
        <footer className="bg-slate-950 border-t border-slate-800 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.05),transparent_70%)]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main Footer Content */}
                <div className="py-16">
                    <div className="grid lg:grid-cols-12 gap-8">
                        {/* Company Info */}
                        <div className="lg:col-span-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="mb-8"
                            >
                                <div className="flex items-center space-x-2 mb-6">
                                    <div className="relative">
                                        <img src={Logo} alt="BlipNode Logo" className="h-12 w-auto" />
                                    </div>
                                    <span className="text-2xl font-bold text-gradient">BlipNode</span>
                                </div>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    Transforming ideas into powerful digital solutions. We're your partners
                                    in building the future of technology, one innovative project at a time.
                                </p>

                                {/* Contact Info */}
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3 text-slate-300">
                                        <Mail className="w-5 h-5 text-cyan-400" />
                                        <span>blipnode.dev@gmail.com</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Links Grid */}
                        <div className="lg:col-span-6">
                            <div className="grid md:grid-cols-4 gap-8">
                                {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                                    <motion.div
                                        key={category}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                                    >
                                        <h4 className="text-white font-semibold mb-4">{category}</h4>
                                        <ul className="space-y-3">
                                            {links.map((link, linkIndex) => (
                                                <li key={linkIndex}>
                                                    {link.to ? (
                                                        <Link
                                                            to={link.to}
                                                            className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                                                        >
                                                            {link.name}
                                                        </Link>
                                                    ) : (
                                                        <a
                                                            href={link.href}
                                                            className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                                                        >
                                                            {link.name}
                                                        </a>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center w-full">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="text-slate-400 text-sm text-center md:text-left mb-4 md:mb-0"
                        >
                            © 2025 BlipNode. All rights reserved. Crafted with ❤️ for innovation.
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex items-center space-x-6"
                        >
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target={social.target}
                                        rel={social.rel}
                                        className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-200"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.a>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
