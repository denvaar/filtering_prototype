--
-- PostgreSQL database dump
--

-- Dumped from database version 12.1
-- Dumped by pg_dump version 12.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: vendor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.vendor (id, name, contact_email, vendor_type) FROM stdin;
1	Underbelly	anthony@underbelly.is	development
2	Ueno	some_guy@ueno.com	development
3	Dockyard	chis@dockyard.com	development
4	Lucasfilms	lucas@starwars.com	production
5	Marvel Studios	stanly@marvel.com	production
\.


--
-- Data for Name: evaluation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.evaluation (id, status, access_type, request_date, vendor_id) FROM stdin;
1	approved	code	2020-01-01	1
2	pending	code	2020-01-06	2
3	pending	content	2020-02-01	1
4	denied	code	2020-02-02	3
5	denied	code	2019-02-02	3
6	pending	film	2020-02-01	4
7	pending	film	2020-01-01	5
9	denied	film	2020-01-01	5
\.


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.migrations (id, "timestamp", name) FROM stdin;
1	1583808901147	createInitialSchema1583808901147
\.


--
-- Name: evaluation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.evaluation_id_seq', 9, true);


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.migrations_id_seq', 1, true);


--
-- Name: vendor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.vendor_id_seq', 5, true);


--
-- PostgreSQL database dump complete
--

