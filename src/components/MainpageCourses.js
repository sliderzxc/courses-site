import React from 'react';
import clsx from 'clsx';
import styles from './MainpageCourses.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const Courses = [
    {
        title: 'Kotlin',
        Svg: require('../../static/img/kotlin.svg').default,
        description: (
            <>
                <Translate>kotlin-course-desc</Translate>
            </>
        ),
    },
];

function Feature({Svg, title, description, className}) {
    return (
        <div className={clsx('col col--4 ', className)}>
            <div className="text--center">
                <Svg className={styles.courseSvg} alt={title}/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

function CoursesPage() {
    return (
        <section className={styles.course}>
            <div className="container">
                <div className="row">
                    {Courses.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function HomepageHeader() {
    return (
        <header className={clsx(styles.heroBanner)}>
            <div className="container">
                <img src="img/sliderzxc.png" alt="Avatar" height="200px" width="200px"/>
                <h1 className="hero__title"><Translate>course-author</Translate></h1>
                <p className="hero__subtitle"><Translate>course-author-desc</Translate></p>
                <p align="center">
                    <Translate>sliderzxc-bio</Translate>
                </p>
            </div>
        </header>
    );
}

export default function Main() {
    return (
        <div>
            <HomepageHeader/>
            <main>
                <CoursesPage/>
            </main>
        </div>
    );
}