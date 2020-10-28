/* eslint-disable camelcase */
export type Maybe<T> = T | null;

export interface StringQueryOperatorInput {
    eq?: Maybe<string>;

    ne?: Maybe<string>;

    in?: Maybe<Maybe<string>[]>;

    nin?: Maybe<Maybe<string>[]>;

    regex?: Maybe<string>;

    glob?: Maybe<string>;
}

export interface IntQueryOperatorInput {
    eq?: Maybe<number>;

    ne?: Maybe<number>;

    gt?: Maybe<number>;

    gte?: Maybe<number>;

    lt?: Maybe<number>;

    lte?: Maybe<number>;

    in?: Maybe<Maybe<number>[]>;

    nin?: Maybe<Maybe<number>[]>;
}

export interface DateQueryOperatorInput {
    eq?: Maybe<Date>;

    ne?: Maybe<Date>;

    gt?: Maybe<Date>;

    gte?: Maybe<Date>;

    lt?: Maybe<Date>;

    lte?: Maybe<Date>;

    in?: Maybe<Maybe<Date>[]>;

    nin?: Maybe<Maybe<Date>[]>;
}

export interface FloatQueryOperatorInput {
    eq?: Maybe<number>;

    ne?: Maybe<number>;

    gt?: Maybe<number>;

    gte?: Maybe<number>;

    lt?: Maybe<number>;

    lte?: Maybe<number>;

    in?: Maybe<Maybe<number>[]>;

    nin?: Maybe<Maybe<number>[]>;
}

export interface ImageSharpFilterInput {
    fixed?: Maybe<ImageSharpFixedFilterInput>;

    resolutions?: Maybe<ImageSharpResolutionsFilterInput>;

    fluid?: Maybe<ImageSharpFluidFilterInput>;

    sizes?: Maybe<ImageSharpSizesFilterInput>;

    original?: Maybe<ImageSharpOriginalFilterInput>;

    resize?: Maybe<ImageSharpResizeFilterInput>;

    id?: Maybe<StringQueryOperatorInput>;

    parent?: Maybe<NodeFilterInput>;

    children?: Maybe<NodeFilterListInput>;

    internal?: Maybe<InternalFilterInput>;
}

export interface ImageSharpFixedFilterInput {
    base64?: Maybe<StringQueryOperatorInput>;

    tracedSVG?: Maybe<StringQueryOperatorInput>;

    aspectRatio?: Maybe<FloatQueryOperatorInput>;

    width?: Maybe<FloatQueryOperatorInput>;

    height?: Maybe<FloatQueryOperatorInput>;

    src?: Maybe<StringQueryOperatorInput>;

    srcSet?: Maybe<StringQueryOperatorInput>;

    srcWebp?: Maybe<StringQueryOperatorInput>;

    srcSetWebp?: Maybe<StringQueryOperatorInput>;

    originalName?: Maybe<StringQueryOperatorInput>;
}

export interface ImageSharpResolutionsFilterInput {
    base64?: Maybe<StringQueryOperatorInput>;

    tracedSVG?: Maybe<StringQueryOperatorInput>;

    aspectRatio?: Maybe<FloatQueryOperatorInput>;

    width?: Maybe<FloatQueryOperatorInput>;

    height?: Maybe<FloatQueryOperatorInput>;

    src?: Maybe<StringQueryOperatorInput>;

    srcSet?: Maybe<StringQueryOperatorInput>;

    srcWebp?: Maybe<StringQueryOperatorInput>;

    srcSetWebp?: Maybe<StringQueryOperatorInput>;

    originalName?: Maybe<StringQueryOperatorInput>;
}

export interface ImageSharpFluidFilterInput {
    base64?: Maybe<StringQueryOperatorInput>;

    tracedSVG?: Maybe<StringQueryOperatorInput>;

    aspectRatio?: Maybe<FloatQueryOperatorInput>;

    src?: Maybe<StringQueryOperatorInput>;

    srcSet?: Maybe<StringQueryOperatorInput>;

    srcWebp?: Maybe<StringQueryOperatorInput>;

    srcSetWebp?: Maybe<StringQueryOperatorInput>;

    sizes?: Maybe<StringQueryOperatorInput>;

    originalImg?: Maybe<StringQueryOperatorInput>;

    originalName?: Maybe<StringQueryOperatorInput>;

    presentationWidth?: Maybe<IntQueryOperatorInput>;

    presentationHeight?: Maybe<IntQueryOperatorInput>;
}

export interface ImageSharpSizesFilterInput {
    base64?: Maybe<StringQueryOperatorInput>;

    tracedSVG?: Maybe<StringQueryOperatorInput>;

    aspectRatio?: Maybe<FloatQueryOperatorInput>;

    src?: Maybe<StringQueryOperatorInput>;

    srcSet?: Maybe<StringQueryOperatorInput>;

    srcWebp?: Maybe<StringQueryOperatorInput>;

    srcSetWebp?: Maybe<StringQueryOperatorInput>;

    sizes?: Maybe<StringQueryOperatorInput>;

    originalImg?: Maybe<StringQueryOperatorInput>;

    originalName?: Maybe<StringQueryOperatorInput>;

    presentationWidth?: Maybe<IntQueryOperatorInput>;

    presentationHeight?: Maybe<IntQueryOperatorInput>;
}

export interface ImageSharpOriginalFilterInput {
    width?: Maybe<FloatQueryOperatorInput>;

    height?: Maybe<FloatQueryOperatorInput>;

    src?: Maybe<StringQueryOperatorInput>;
}

export interface ImageSharpResizeFilterInput {
    src?: Maybe<StringQueryOperatorInput>;

    tracedSVG?: Maybe<StringQueryOperatorInput>;

    width?: Maybe<IntQueryOperatorInput>;

    height?: Maybe<IntQueryOperatorInput>;

    aspectRatio?: Maybe<FloatQueryOperatorInput>;

    originalName?: Maybe<StringQueryOperatorInput>;
}

export interface NodeFilterInput {
    id?: Maybe<StringQueryOperatorInput>;

    parent?: Maybe<NodeFilterInput>;

    children?: Maybe<NodeFilterListInput>;

    internal?: Maybe<InternalFilterInput>;
}

export interface NodeFilterListInput {
    elemMatch?: Maybe<NodeFilterInput>;
}

export interface InternalFilterInput {
    content?: Maybe<StringQueryOperatorInput>;

    contentDigest?: Maybe<StringQueryOperatorInput>;

    description?: Maybe<StringQueryOperatorInput>;

    fieldOwners?: Maybe<StringQueryOperatorInput>;

    ignoreType?: Maybe<BooleanQueryOperatorInput>;

    mediaType?: Maybe<StringQueryOperatorInput>;

    owner?: Maybe<StringQueryOperatorInput>;

    type?: Maybe<StringQueryOperatorInput>;
}

export interface BooleanQueryOperatorInput {
    eq?: Maybe<boolean>;

    ne?: Maybe<boolean>;

    in?: Maybe<Maybe<boolean>[]>;

    nin?: Maybe<Maybe<boolean>[]>;
}

export interface MarkdownRemarkFilterInput {
    id?: Maybe<StringQueryOperatorInput>;

    frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;

    excerpt?: Maybe<StringQueryOperatorInput>;

    rawMarkdownBody?: Maybe<StringQueryOperatorInput>;

    fileAbsolutePath?: Maybe<StringQueryOperatorInput>;

    fields?: Maybe<MarkdownRemarkFieldsFilterInput>;

    html?: Maybe<StringQueryOperatorInput>;

    htmlAst?: Maybe<JsonQueryOperatorInput>;

    excerptAst?: Maybe<JsonQueryOperatorInput>;

    headings?: Maybe<MarkdownHeadingFilterListInput>;

    timeToRead?: Maybe<IntQueryOperatorInput>;

    tableOfContents?: Maybe<StringQueryOperatorInput>;

    wordCount?: Maybe<MarkdownWordCountFilterInput>;

    parent?: Maybe<NodeFilterInput>;

    children?: Maybe<NodeFilterListInput>;

    internal?: Maybe<InternalFilterInput>;
}

export interface MarkdownRemarkFrontmatterFilterInput {
    title?: Maybe<StringQueryOperatorInput>;

    date?: Maybe<DateQueryOperatorInput>;

    description?: Maybe<StringQueryOperatorInput>;

    category?: Maybe<StringQueryOperatorInput>;

    background?: Maybe<StringQueryOperatorInput>;

    image?: Maybe<FileFilterInput>;
}

export interface FileFilterInput {
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;

    absolutePath?: Maybe<StringQueryOperatorInput>;

    relativePath?: Maybe<StringQueryOperatorInput>;

    extension?: Maybe<StringQueryOperatorInput>;

    size?: Maybe<IntQueryOperatorInput>;

    prettySize?: Maybe<StringQueryOperatorInput>;

    modifiedTime?: Maybe<DateQueryOperatorInput>;

    accessTime?: Maybe<DateQueryOperatorInput>;

    changeTime?: Maybe<DateQueryOperatorInput>;

    birthTime?: Maybe<DateQueryOperatorInput>;

    root?: Maybe<StringQueryOperatorInput>;

    dir?: Maybe<StringQueryOperatorInput>;

    base?: Maybe<StringQueryOperatorInput>;

    ext?: Maybe<StringQueryOperatorInput>;

    name?: Maybe<StringQueryOperatorInput>;

    relativeDirectory?: Maybe<StringQueryOperatorInput>;

    dev?: Maybe<IntQueryOperatorInput>;

    mode?: Maybe<IntQueryOperatorInput>;

    nlink?: Maybe<IntQueryOperatorInput>;

    uid?: Maybe<IntQueryOperatorInput>;

    gid?: Maybe<IntQueryOperatorInput>;

    rdev?: Maybe<IntQueryOperatorInput>;

    ino?: Maybe<FloatQueryOperatorInput>;

    atimeMs?: Maybe<FloatQueryOperatorInput>;

    mtimeMs?: Maybe<FloatQueryOperatorInput>;

    ctimeMs?: Maybe<FloatQueryOperatorInput>;

    atime?: Maybe<DateQueryOperatorInput>;

    mtime?: Maybe<DateQueryOperatorInput>;

    ctime?: Maybe<DateQueryOperatorInput>;

    birthtime?: Maybe<DateQueryOperatorInput>;

    birthtimeMs?: Maybe<FloatQueryOperatorInput>;

    blksize?: Maybe<IntQueryOperatorInput>;

    blocks?: Maybe<IntQueryOperatorInput>;

    publicURL?: Maybe<StringQueryOperatorInput>;

    childImageSharp?: Maybe<ImageSharpFilterInput>;

    id?: Maybe<StringQueryOperatorInput>;

    parent?: Maybe<NodeFilterInput>;

    children?: Maybe<NodeFilterListInput>;

    internal?: Maybe<InternalFilterInput>;

    childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
}

export interface MarkdownRemarkFieldsFilterInput {
    slug?: Maybe<StringQueryOperatorInput>;
}

export interface JsonQueryOperatorInput {
    eq?: Maybe<Json>;

    ne?: Maybe<Json>;

    in?: Maybe<Maybe<Json>[]>;

    nin?: Maybe<Maybe<Json>[]>;

    regex?: Maybe<Json>;

    glob?: Maybe<Json>;
}

export interface MarkdownHeadingFilterListInput {
    elemMatch?: Maybe<MarkdownHeadingFilterInput>;
}

export interface MarkdownHeadingFilterInput {
    id?: Maybe<StringQueryOperatorInput>;

    value?: Maybe<StringQueryOperatorInput>;

    depth?: Maybe<IntQueryOperatorInput>;
}

export interface MarkdownWordCountFilterInput {
    paragraphs?: Maybe<IntQueryOperatorInput>;

    sentences?: Maybe<IntQueryOperatorInput>;

    words?: Maybe<IntQueryOperatorInput>;
}

export interface DuotoneGradient {
    highlight: string;

    shadow: string;

    opacity?: Maybe<number>;
}

export interface Potrace {
    turnPolicy?: Maybe<PotraceTurnPolicy>;

    turdSize?: Maybe<number>;

    alphaMax?: Maybe<number>;

    optCurve?: Maybe<boolean>;

    optTolerance?: Maybe<number>;

    threshold?: Maybe<number>;

    blackOnWhite?: Maybe<boolean>;

    color?: Maybe<string>;

    background?: Maybe<string>;
}

export interface FileSortInput {
    fields?: Maybe<Maybe<FileFieldsEnum>[]>;

    order?: Maybe<SortOrderEnum>[];
}

export interface DirectoryFilterInput {
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;

    absolutePath?: Maybe<StringQueryOperatorInput>;

    relativePath?: Maybe<StringQueryOperatorInput>;

    extension?: Maybe<StringQueryOperatorInput>;

    size?: Maybe<IntQueryOperatorInput>;

    prettySize?: Maybe<StringQueryOperatorInput>;

    modifiedTime?: Maybe<DateQueryOperatorInput>;

    accessTime?: Maybe<DateQueryOperatorInput>;

    changeTime?: Maybe<DateQueryOperatorInput>;

    birthTime?: Maybe<DateQueryOperatorInput>;

    root?: Maybe<StringQueryOperatorInput>;

    dir?: Maybe<StringQueryOperatorInput>;

    base?: Maybe<StringQueryOperatorInput>;

    ext?: Maybe<StringQueryOperatorInput>;

    name?: Maybe<StringQueryOperatorInput>;

    relativeDirectory?: Maybe<StringQueryOperatorInput>;

    dev?: Maybe<IntQueryOperatorInput>;

    mode?: Maybe<IntQueryOperatorInput>;

    nlink?: Maybe<IntQueryOperatorInput>;

    uid?: Maybe<IntQueryOperatorInput>;

    gid?: Maybe<IntQueryOperatorInput>;

    rdev?: Maybe<IntQueryOperatorInput>;

    ino?: Maybe<FloatQueryOperatorInput>;

    atimeMs?: Maybe<FloatQueryOperatorInput>;

    mtimeMs?: Maybe<FloatQueryOperatorInput>;

    ctimeMs?: Maybe<FloatQueryOperatorInput>;

    atime?: Maybe<DateQueryOperatorInput>;

    mtime?: Maybe<DateQueryOperatorInput>;

    ctime?: Maybe<DateQueryOperatorInput>;

    birthtime?: Maybe<DateQueryOperatorInput>;

    birthtimeMs?: Maybe<FloatQueryOperatorInput>;

    blksize?: Maybe<IntQueryOperatorInput>;

    blocks?: Maybe<IntQueryOperatorInput>;

    id?: Maybe<StringQueryOperatorInput>;

    parent?: Maybe<NodeFilterInput>;

    children?: Maybe<NodeFilterListInput>;

    internal?: Maybe<InternalFilterInput>;
}

export interface DirectorySortInput {
    fields?: Maybe<Maybe<DirectoryFieldsEnum>[]>;

    order?: Maybe<SortOrderEnum>[];
}

export interface SiteSiteMetadataFilterInput {
    title?: Maybe<StringQueryOperatorInput>;

    description?: Maybe<StringQueryOperatorInput>;

    position?: Maybe<StringQueryOperatorInput>;

    author?: Maybe<StringQueryOperatorInput>;
}

export interface SiteFilterInput {
    buildTime?: Maybe<DateQueryOperatorInput>;

    siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;

    port?: Maybe<IntQueryOperatorInput>;

    host?: Maybe<StringQueryOperatorInput>;

    id?: Maybe<StringQueryOperatorInput>;

    parent?: Maybe<NodeFilterInput>;

    children?: Maybe<NodeFilterListInput>;

    internal?: Maybe<InternalFilterInput>;
}

export interface SiteSortInput {
    fields?: Maybe<Maybe<SiteFieldsEnum>[]>;

    order?: Maybe<SortOrderEnum>[];
}

export interface SitePageContextFilterInput {
    slug?: Maybe<StringQueryOperatorInput>;

    previousPost?: Maybe<SitePageContextPreviousPostFilterInput>;

    nextPost?: Maybe<SitePageContextNextPostFilterInput>;

    limit?: Maybe<IntQueryOperatorInput>;

    skip?: Maybe<IntQueryOperatorInput>;

    numPages?: Maybe<IntQueryOperatorInput>;

    currentPage?: Maybe<IntQueryOperatorInput>;
}

export interface SitePageContextPreviousPostFilterInput {
    frontmatter?: Maybe<SitePageContextPreviousPostFrontmatterFilterInput>;

    fields?: Maybe<SitePageContextPreviousPostFieldsFilterInput>;
}

export interface SitePageContextPreviousPostFrontmatterFilterInput {
    title?: Maybe<StringQueryOperatorInput>;
}

export interface SitePageContextPreviousPostFieldsFilterInput {
    slug?: Maybe<StringQueryOperatorInput>;
}

export interface SitePageContextNextPostFilterInput {
    frontmatter?: Maybe<SitePageContextNextPostFrontmatterFilterInput>;

    fields?: Maybe<SitePageContextNextPostFieldsFilterInput>;
}

export interface SitePageContextNextPostFrontmatterFilterInput {
    title?: Maybe<StringQueryOperatorInput>;
}

export interface SitePageContextNextPostFieldsFilterInput {
    slug?: Maybe<StringQueryOperatorInput>;
}

export interface SitePluginFilterInput {
    id?: Maybe<StringQueryOperatorInput>;

    parent?: Maybe<NodeFilterInput>;

    children?: Maybe<NodeFilterListInput>;

    internal?: Maybe<InternalFilterInput>;

    resolve?: Maybe<StringQueryOperatorInput>;

    name?: Maybe<StringQueryOperatorInput>;

    version?: Maybe<StringQueryOperatorInput>;

    pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;

    nodeAPIs?: Maybe<StringQueryOperatorInput>;

    browserAPIs?: Maybe<StringQueryOperatorInput>;

    ssrAPIs?: Maybe<StringQueryOperatorInput>;

    pluginFilepath?: Maybe<StringQueryOperatorInput>;

    packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
}

export interface SitePluginPluginOptionsFilterInput {
    plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;

    name?: Maybe<StringQueryOperatorInput>;

    path?: Maybe<StringQueryOperatorInput>;

    short_name?: Maybe<StringQueryOperatorInput>;

    start_url?: Maybe<StringQueryOperatorInput>;

    background_color?: Maybe<StringQueryOperatorInput>;

    theme_color?: Maybe<StringQueryOperatorInput>;

    display?: Maybe<StringQueryOperatorInput>;

    cache_busting_mode?: Maybe<StringQueryOperatorInput>;

    include_favicon?: Maybe<BooleanQueryOperatorInput>;

    legacy?: Maybe<BooleanQueryOperatorInput>;

    theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;

    staticFolderName?: Maybe<StringQueryOperatorInput>;

    maxWidth?: Maybe<IntQueryOperatorInput>;

    linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;

    pathCheck?: Maybe<BooleanQueryOperatorInput>;
}

export interface SitePluginPluginOptionsPluginsFilterListInput {
    elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
}

export interface SitePluginPluginOptionsPluginsFilterInput {
    resolve?: Maybe<StringQueryOperatorInput>;

    id?: Maybe<StringQueryOperatorInput>;

    name?: Maybe<StringQueryOperatorInput>;

    version?: Maybe<StringQueryOperatorInput>;

    pluginOptions?: Maybe<
        SitePluginPluginOptionsPluginsPluginOptionsFilterInput
    >;

    nodeAPIs?: Maybe<StringQueryOperatorInput>;

    browserAPIs?: Maybe<StringQueryOperatorInput>;

    pluginFilepath?: Maybe<StringQueryOperatorInput>;
}

export interface SitePluginPluginOptionsPluginsPluginOptionsFilterInput {
    name?: Maybe<StringQueryOperatorInput>;

    staticFolderName?: Maybe<StringQueryOperatorInput>;

    maxWidth?: Maybe<IntQueryOperatorInput>;

    linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
}

export interface SitePluginPackageJsonFilterInput {
    name?: Maybe<StringQueryOperatorInput>;

    description?: Maybe<StringQueryOperatorInput>;

    version?: Maybe<StringQueryOperatorInput>;

    main?: Maybe<StringQueryOperatorInput>;

    author?: Maybe<StringQueryOperatorInput>;

    license?: Maybe<StringQueryOperatorInput>;

    dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;

    devDependencies?: Maybe<
        SitePluginPackageJsonDevDependenciesFilterListInput
    >;

    peerDependencies?: Maybe<
        SitePluginPackageJsonPeerDependenciesFilterListInput
    >;

    keywords?: Maybe<StringQueryOperatorInput>;
}

export interface SitePluginPackageJsonDependenciesFilterListInput {
    elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
}

export interface SitePluginPackageJsonDependenciesFilterInput {
    name?: Maybe<StringQueryOperatorInput>;

    version?: Maybe<StringQueryOperatorInput>;
}

export interface SitePluginPackageJsonDevDependenciesFilterListInput {
    elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
}

export interface SitePluginPackageJsonDevDependenciesFilterInput {
    name?: Maybe<StringQueryOperatorInput>;

    version?: Maybe<StringQueryOperatorInput>;
}

export interface SitePluginPackageJsonPeerDependenciesFilterListInput {
    elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
}

export interface SitePluginPackageJsonPeerDependenciesFilterInput {
    name?: Maybe<StringQueryOperatorInput>;

    version?: Maybe<StringQueryOperatorInput>;
}

export interface SitePageFilterInput {
    path?: Maybe<StringQueryOperatorInput>;

    component?: Maybe<StringQueryOperatorInput>;

    internalComponentName?: Maybe<StringQueryOperatorInput>;

    componentChunkName?: Maybe<StringQueryOperatorInput>;

    matchPath?: Maybe<StringQueryOperatorInput>;

    isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;

    context?: Maybe<SitePageContextFilterInput>;

    pluginCreator?: Maybe<SitePluginFilterInput>;

    pluginCreatorId?: Maybe<StringQueryOperatorInput>;

    componentPath?: Maybe<StringQueryOperatorInput>;

    id?: Maybe<StringQueryOperatorInput>;

    parent?: Maybe<NodeFilterInput>;

    children?: Maybe<NodeFilterListInput>;

    internal?: Maybe<InternalFilterInput>;
}

export interface SitePageSortInput {
    fields?: Maybe<Maybe<SitePageFieldsEnum>[]>;

    order?: Maybe<SortOrderEnum>[];
}

export interface ImageSharpSortInput {
    fields?: Maybe<Maybe<ImageSharpFieldsEnum>[]>;

    order?: Maybe<SortOrderEnum>[];
}

export interface MarkdownRemarkSortInput {
    fields?: Maybe<Maybe<MarkdownRemarkFieldsEnum>[]>;

    order?: Maybe<SortOrderEnum>[];
}

export interface SiteBuildMetadataFilterInput {
    id?: Maybe<StringQueryOperatorInput>;

    parent?: Maybe<NodeFilterInput>;

    children?: Maybe<NodeFilterListInput>;

    internal?: Maybe<InternalFilterInput>;

    buildTime?: Maybe<DateQueryOperatorInput>;
}

export interface SiteBuildMetadataSortInput {
    fields?: Maybe<Maybe<SiteBuildMetadataFieldsEnum>[]>;

    order?: Maybe<SortOrderEnum>[];
}

export interface SitePluginSortInput {
    fields?: Maybe<Maybe<SitePluginFieldsEnum>[]>;

    order?: Maybe<SortOrderEnum>[];
}

export enum PotraceTurnPolicy {
    TurnpolicyBlack = 'TURNPOLICY_BLACK',
    TurnpolicyWhite = 'TURNPOLICY_WHITE',
    TurnpolicyLeft = 'TURNPOLICY_LEFT',
    TurnpolicyRight = 'TURNPOLICY_RIGHT',
    TurnpolicyMinority = 'TURNPOLICY_MINORITY',
    TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
}

export enum ImageFormat {
    NoChange = 'NO_CHANGE',
    Jpg = 'JPG',
    Png = 'PNG',
    Webp = 'WEBP',
}

export enum ImageCropFocus {
    Center = 'CENTER',
    North = 'NORTH',
    Northeast = 'NORTHEAST',
    East = 'EAST',
    Southeast = 'SOUTHEAST',
    South = 'SOUTH',
    Southwest = 'SOUTHWEST',
    West = 'WEST',
    Northwest = 'NORTHWEST',
    Entropy = 'ENTROPY',
    Attention = 'ATTENTION',
}

export enum ImageFit {
    Cover = 'COVER',
    Contain = 'CONTAIN',
    Fill = 'FILL',
    Inside = 'INSIDE',
    Outside = 'OUTSIDE',
}

export enum MarkdownExcerptFormats {
    Plain = 'PLAIN',
    Html = 'HTML',
    Markdown = 'MARKDOWN',
}

export enum MarkdownHeadingLevels {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
}

export enum FileFieldsEnum {
    SourceInstanceName = 'sourceInstanceName',
    AbsolutePath = 'absolutePath',
    RelativePath = 'relativePath',
    Extension = 'extension',
    Size = 'size',
    PrettySize = 'prettySize',
    ModifiedTime = 'modifiedTime',
    AccessTime = 'accessTime',
    ChangeTime = 'changeTime',
    BirthTime = 'birthTime',
    Root = 'root',
    Dir = 'dir',
    Base = 'base',
    Ext = 'ext',
    Name = 'name',
    RelativeDirectory = 'relativeDirectory',
    Dev = 'dev',
    Mode = 'mode',
    Nlink = 'nlink',
    Uid = 'uid',
    Gid = 'gid',
    Rdev = 'rdev',
    Ino = 'ino',
    AtimeMs = 'atimeMs',
    MtimeMs = 'mtimeMs',
    CtimeMs = 'ctimeMs',
    Atime = 'atime',
    Mtime = 'mtime',
    Ctime = 'ctime',
    Birthtime = 'birthtime',
    BirthtimeMs = 'birthtimeMs',
    Blksize = 'blksize',
    Blocks = 'blocks',
    PublicUrl = 'publicURL',
    ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
    ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
    ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
    ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
    ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
    ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
    ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
    ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
    ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
    ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
    ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
    ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
    ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
    ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
    ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
    ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
    ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
    ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
    ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
    ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
    ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
    ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
    ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
    ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
    ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
    ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
    ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
    ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
    ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
    ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
    ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
    ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
    ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
    ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
    ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
    ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
    ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
    ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
    ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
    ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
    ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
    ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
    ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
    ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
    ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
    ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
    ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
    ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
    ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
    ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
    ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
    ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
    ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
    ChildImageSharpId = 'childImageSharp___id',
    ChildImageSharpParentId = 'childImageSharp___parent___id',
    ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
    ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
    ChildImageSharpParentChildren = 'childImageSharp___parent___children',
    ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
    ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
    ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
    ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
    ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
    ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
    ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
    ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
    ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
    ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
    ChildImageSharpChildren = 'childImageSharp___children',
    ChildImageSharpChildrenId = 'childImageSharp___children___id',
    ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
    ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
    ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
    ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
    ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
    ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
    ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
    ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
    ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
    ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
    ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
    ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
    ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
    ChildImageSharpInternalContent = 'childImageSharp___internal___content',
    ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
    ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
    ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
    ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
    ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
    ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
    ChildImageSharpInternalType = 'childImageSharp___internal___type',
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    ChildMarkdownRemarkId = 'childMarkdownRemark___id',
    ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
    ChildMarkdownRemarkFrontmatterDate = 'childMarkdownRemark___frontmatter___date',
    ChildMarkdownRemarkFrontmatterDescription = 'childMarkdownRemark___frontmatter___description',
    ChildMarkdownRemarkFrontmatterCategory = 'childMarkdownRemark___frontmatter___category',
    ChildMarkdownRemarkFrontmatterBackground = 'childMarkdownRemark___frontmatter___background',
    ChildMarkdownRemarkFrontmatterImageSourceInstanceName = 'childMarkdownRemark___frontmatter___image___sourceInstanceName',
    ChildMarkdownRemarkFrontmatterImageAbsolutePath = 'childMarkdownRemark___frontmatter___image___absolutePath',
    ChildMarkdownRemarkFrontmatterImageRelativePath = 'childMarkdownRemark___frontmatter___image___relativePath',
    ChildMarkdownRemarkFrontmatterImageExtension = 'childMarkdownRemark___frontmatter___image___extension',
    ChildMarkdownRemarkFrontmatterImageSize = 'childMarkdownRemark___frontmatter___image___size',
    ChildMarkdownRemarkFrontmatterImagePrettySize = 'childMarkdownRemark___frontmatter___image___prettySize',
    ChildMarkdownRemarkFrontmatterImageModifiedTime = 'childMarkdownRemark___frontmatter___image___modifiedTime',
    ChildMarkdownRemarkFrontmatterImageAccessTime = 'childMarkdownRemark___frontmatter___image___accessTime',
    ChildMarkdownRemarkFrontmatterImageChangeTime = 'childMarkdownRemark___frontmatter___image___changeTime',
    ChildMarkdownRemarkFrontmatterImageBirthTime = 'childMarkdownRemark___frontmatter___image___birthTime',
    ChildMarkdownRemarkFrontmatterImageRoot = 'childMarkdownRemark___frontmatter___image___root',
    ChildMarkdownRemarkFrontmatterImageDir = 'childMarkdownRemark___frontmatter___image___dir',
    ChildMarkdownRemarkFrontmatterImageBase = 'childMarkdownRemark___frontmatter___image___base',
    ChildMarkdownRemarkFrontmatterImageExt = 'childMarkdownRemark___frontmatter___image___ext',
    ChildMarkdownRemarkFrontmatterImageName = 'childMarkdownRemark___frontmatter___image___name',
    ChildMarkdownRemarkFrontmatterImageRelativeDirectory = 'childMarkdownRemark___frontmatter___image___relativeDirectory',
    ChildMarkdownRemarkFrontmatterImageDev = 'childMarkdownRemark___frontmatter___image___dev',
    ChildMarkdownRemarkFrontmatterImageMode = 'childMarkdownRemark___frontmatter___image___mode',
    ChildMarkdownRemarkFrontmatterImageNlink = 'childMarkdownRemark___frontmatter___image___nlink',
    ChildMarkdownRemarkFrontmatterImageUid = 'childMarkdownRemark___frontmatter___image___uid',
    ChildMarkdownRemarkFrontmatterImageGid = 'childMarkdownRemark___frontmatter___image___gid',
    ChildMarkdownRemarkFrontmatterImageRdev = 'childMarkdownRemark___frontmatter___image___rdev',
    ChildMarkdownRemarkFrontmatterImageIno = 'childMarkdownRemark___frontmatter___image___ino',
    ChildMarkdownRemarkFrontmatterImageAtimeMs = 'childMarkdownRemark___frontmatter___image___atimeMs',
    ChildMarkdownRemarkFrontmatterImageMtimeMs = 'childMarkdownRemark___frontmatter___image___mtimeMs',
    ChildMarkdownRemarkFrontmatterImageCtimeMs = 'childMarkdownRemark___frontmatter___image___ctimeMs',
    ChildMarkdownRemarkFrontmatterImageAtime = 'childMarkdownRemark___frontmatter___image___atime',
    ChildMarkdownRemarkFrontmatterImageMtime = 'childMarkdownRemark___frontmatter___image___mtime',
    ChildMarkdownRemarkFrontmatterImageCtime = 'childMarkdownRemark___frontmatter___image___ctime',
    ChildMarkdownRemarkFrontmatterImageBirthtime = 'childMarkdownRemark___frontmatter___image___birthtime',
    ChildMarkdownRemarkFrontmatterImageBirthtimeMs = 'childMarkdownRemark___frontmatter___image___birthtimeMs',
    ChildMarkdownRemarkFrontmatterImageBlksize = 'childMarkdownRemark___frontmatter___image___blksize',
    ChildMarkdownRemarkFrontmatterImageBlocks = 'childMarkdownRemark___frontmatter___image___blocks',
    ChildMarkdownRemarkFrontmatterImagePublicUrl = 'childMarkdownRemark___frontmatter___image___publicURL',
    ChildMarkdownRemarkFrontmatterImageId = 'childMarkdownRemark___frontmatter___image___id',
    ChildMarkdownRemarkFrontmatterImageChildren = 'childMarkdownRemark___frontmatter___image___children',
    ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
    ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
    ChildMarkdownRemarkFileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
    ChildMarkdownRemarkFieldsSlug = 'childMarkdownRemark___fields___slug',
    ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
    ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
    ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
    ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
    ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
    ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
    ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
    ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
    ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
    ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
    ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
    ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
    ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
    ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
    ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
    ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
    ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
    ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
    ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
    ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
    ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
    ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
    ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
    ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
    ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
    ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
    ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
    ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
    ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
    ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
    ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
    ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
    ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
    ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
    ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
    ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
    ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
    ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
    ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
    ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
    ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
    ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
    ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
    ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
    ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
    ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
    ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
    ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
    ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type',
}

export enum SortOrderEnum {
    Asc = 'ASC',
    Desc = 'DESC',
}

export enum DirectoryFieldsEnum {
    SourceInstanceName = 'sourceInstanceName',
    AbsolutePath = 'absolutePath',
    RelativePath = 'relativePath',
    Extension = 'extension',
    Size = 'size',
    PrettySize = 'prettySize',
    ModifiedTime = 'modifiedTime',
    AccessTime = 'accessTime',
    ChangeTime = 'changeTime',
    BirthTime = 'birthTime',
    Root = 'root',
    Dir = 'dir',
    Base = 'base',
    Ext = 'ext',
    Name = 'name',
    RelativeDirectory = 'relativeDirectory',
    Dev = 'dev',
    Mode = 'mode',
    Nlink = 'nlink',
    Uid = 'uid',
    Gid = 'gid',
    Rdev = 'rdev',
    Ino = 'ino',
    AtimeMs = 'atimeMs',
    MtimeMs = 'mtimeMs',
    CtimeMs = 'ctimeMs',
    Atime = 'atime',
    Mtime = 'mtime',
    Ctime = 'ctime',
    Birthtime = 'birthtime',
    BirthtimeMs = 'birthtimeMs',
    Blksize = 'blksize',
    Blocks = 'blocks',
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
}

export enum SiteFieldsEnum {
    BuildTime = 'buildTime',
    SiteMetadataTitle = 'siteMetadata___title',
    SiteMetadataDescription = 'siteMetadata___description',
    SiteMetadataPosition = 'siteMetadata___position',
    SiteMetadataAuthor = 'siteMetadata___author',
    Port = 'port',
    Host = 'host',
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
}

export enum SitePageFieldsEnum {
    Path = 'path',
    Component = 'component',
    InternalComponentName = 'internalComponentName',
    ComponentChunkName = 'componentChunkName',
    MatchPath = 'matchPath',
    IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
    ContextSlug = 'context___slug',
    ContextPreviousPostFrontmatterTitle = 'context___previousPost___frontmatter___title',
    ContextPreviousPostFieldsSlug = 'context___previousPost___fields___slug',
    ContextNextPostFrontmatterTitle = 'context___nextPost___frontmatter___title',
    ContextNextPostFieldsSlug = 'context___nextPost___fields___slug',
    ContextLimit = 'context___limit',
    ContextSkip = 'context___skip',
    ContextNumPages = 'context___numPages',
    ContextCurrentPage = 'context___currentPage',
    PluginCreatorId = 'pluginCreator___id',
    PluginCreatorParentId = 'pluginCreator___parent___id',
    PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
    PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
    PluginCreatorParentChildren = 'pluginCreator___parent___children',
    PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
    PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
    PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
    PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
    PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
    PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
    PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
    PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
    PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
    PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
    PluginCreatorChildren = 'pluginCreator___children',
    PluginCreatorChildrenId = 'pluginCreator___children___id',
    PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
    PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
    PluginCreatorChildrenChildren = 'pluginCreator___children___children',
    PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
    PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
    PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
    PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
    PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
    PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
    PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
    PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
    PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
    PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
    PluginCreatorInternalContent = 'pluginCreator___internal___content',
    PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
    PluginCreatorInternalDescription = 'pluginCreator___internal___description',
    PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
    PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
    PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
    PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
    PluginCreatorInternalType = 'pluginCreator___internal___type',
    PluginCreatorResolve = 'pluginCreator___resolve',
    PluginCreatorName = 'pluginCreator___name',
    PluginCreatorVersion = 'pluginCreator___version',
    PluginCreatorPluginOptionsPlugins = 'pluginCreator___pluginOptions___plugins',
    PluginCreatorPluginOptionsPluginsResolve = 'pluginCreator___pluginOptions___plugins___resolve',
    PluginCreatorPluginOptionsPluginsId = 'pluginCreator___pluginOptions___plugins___id',
    PluginCreatorPluginOptionsPluginsName = 'pluginCreator___pluginOptions___plugins___name',
    PluginCreatorPluginOptionsPluginsVersion = 'pluginCreator___pluginOptions___plugins___version',
    PluginCreatorPluginOptionsPluginsNodeApIs = 'pluginCreator___pluginOptions___plugins___nodeAPIs',
    PluginCreatorPluginOptionsPluginsBrowserApIs = 'pluginCreator___pluginOptions___plugins___browserAPIs',
    PluginCreatorPluginOptionsPluginsPluginFilepath = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
    PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
    PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
    PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
    PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
    PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
    PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
    PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
    PluginCreatorPluginOptionsCacheBustingMode = 'pluginCreator___pluginOptions___cache_busting_mode',
    PluginCreatorPluginOptionsIncludeFavicon = 'pluginCreator___pluginOptions___include_favicon',
    PluginCreatorPluginOptionsLegacy = 'pluginCreator___pluginOptions___legacy',
    PluginCreatorPluginOptionsThemeColorInHead = 'pluginCreator___pluginOptions___theme_color_in_head',
    PluginCreatorPluginOptionsStaticFolderName = 'pluginCreator___pluginOptions___staticFolderName',
    PluginCreatorPluginOptionsMaxWidth = 'pluginCreator___pluginOptions___maxWidth',
    PluginCreatorPluginOptionsLinkImagesToOriginal = 'pluginCreator___pluginOptions___linkImagesToOriginal',
    PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
    PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
    PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
    PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
    PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
    PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
    PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
    PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
    PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
    PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
    PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
    PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
    PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
    PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
    PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
    PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
    PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
    PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
    PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
    PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
    PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
    PluginCreatorId = 'pluginCreatorId',
    ComponentPath = 'componentPath',
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
}

export enum ImageSharpFieldsEnum {
    FixedBase64 = 'fixed___base64',
    FixedTracedSvg = 'fixed___tracedSVG',
    FixedAspectRatio = 'fixed___aspectRatio',
    FixedWidth = 'fixed___width',
    FixedHeight = 'fixed___height',
    FixedSrc = 'fixed___src',
    FixedSrcSet = 'fixed___srcSet',
    FixedSrcWebp = 'fixed___srcWebp',
    FixedSrcSetWebp = 'fixed___srcSetWebp',
    FixedOriginalName = 'fixed___originalName',
    ResolutionsBase64 = 'resolutions___base64',
    ResolutionsTracedSvg = 'resolutions___tracedSVG',
    ResolutionsAspectRatio = 'resolutions___aspectRatio',
    ResolutionsWidth = 'resolutions___width',
    ResolutionsHeight = 'resolutions___height',
    ResolutionsSrc = 'resolutions___src',
    ResolutionsSrcSet = 'resolutions___srcSet',
    ResolutionsSrcWebp = 'resolutions___srcWebp',
    ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
    ResolutionsOriginalName = 'resolutions___originalName',
    FluidBase64 = 'fluid___base64',
    FluidTracedSvg = 'fluid___tracedSVG',
    FluidAspectRatio = 'fluid___aspectRatio',
    FluidSrc = 'fluid___src',
    FluidSrcSet = 'fluid___srcSet',
    FluidSrcWebp = 'fluid___srcWebp',
    FluidSrcSetWebp = 'fluid___srcSetWebp',
    FluidSizes = 'fluid___sizes',
    FluidOriginalImg = 'fluid___originalImg',
    FluidOriginalName = 'fluid___originalName',
    FluidPresentationWidth = 'fluid___presentationWidth',
    FluidPresentationHeight = 'fluid___presentationHeight',
    SizesBase64 = 'sizes___base64',
    SizesTracedSvg = 'sizes___tracedSVG',
    SizesAspectRatio = 'sizes___aspectRatio',
    SizesSrc = 'sizes___src',
    SizesSrcSet = 'sizes___srcSet',
    SizesSrcWebp = 'sizes___srcWebp',
    SizesSrcSetWebp = 'sizes___srcSetWebp',
    SizesSizes = 'sizes___sizes',
    SizesOriginalImg = 'sizes___originalImg',
    SizesOriginalName = 'sizes___originalName',
    SizesPresentationWidth = 'sizes___presentationWidth',
    SizesPresentationHeight = 'sizes___presentationHeight',
    OriginalWidth = 'original___width',
    OriginalHeight = 'original___height',
    OriginalSrc = 'original___src',
    ResizeSrc = 'resize___src',
    ResizeTracedSvg = 'resize___tracedSVG',
    ResizeWidth = 'resize___width',
    ResizeHeight = 'resize___height',
    ResizeAspectRatio = 'resize___aspectRatio',
    ResizeOriginalName = 'resize___originalName',
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
}

export enum MarkdownRemarkFieldsEnum {
    Id = 'id',
    FrontmatterTitle = 'frontmatter___title',
    FrontmatterDate = 'frontmatter___date',
    FrontmatterDescription = 'frontmatter___description',
    FrontmatterCategory = 'frontmatter___category',
    FrontmatterBackground = 'frontmatter___background',
    FrontmatterImageSourceInstanceName = 'frontmatter___image___sourceInstanceName',
    FrontmatterImageAbsolutePath = 'frontmatter___image___absolutePath',
    FrontmatterImageRelativePath = 'frontmatter___image___relativePath',
    FrontmatterImageExtension = 'frontmatter___image___extension',
    FrontmatterImageSize = 'frontmatter___image___size',
    FrontmatterImagePrettySize = 'frontmatter___image___prettySize',
    FrontmatterImageModifiedTime = 'frontmatter___image___modifiedTime',
    FrontmatterImageAccessTime = 'frontmatter___image___accessTime',
    FrontmatterImageChangeTime = 'frontmatter___image___changeTime',
    FrontmatterImageBirthTime = 'frontmatter___image___birthTime',
    FrontmatterImageRoot = 'frontmatter___image___root',
    FrontmatterImageDir = 'frontmatter___image___dir',
    FrontmatterImageBase = 'frontmatter___image___base',
    FrontmatterImageExt = 'frontmatter___image___ext',
    FrontmatterImageName = 'frontmatter___image___name',
    FrontmatterImageRelativeDirectory = 'frontmatter___image___relativeDirectory',
    FrontmatterImageDev = 'frontmatter___image___dev',
    FrontmatterImageMode = 'frontmatter___image___mode',
    FrontmatterImageNlink = 'frontmatter___image___nlink',
    FrontmatterImageUid = 'frontmatter___image___uid',
    FrontmatterImageGid = 'frontmatter___image___gid',
    FrontmatterImageRdev = 'frontmatter___image___rdev',
    FrontmatterImageIno = 'frontmatter___image___ino',
    FrontmatterImageAtimeMs = 'frontmatter___image___atimeMs',
    FrontmatterImageMtimeMs = 'frontmatter___image___mtimeMs',
    FrontmatterImageCtimeMs = 'frontmatter___image___ctimeMs',
    FrontmatterImageAtime = 'frontmatter___image___atime',
    FrontmatterImageMtime = 'frontmatter___image___mtime',
    FrontmatterImageCtime = 'frontmatter___image___ctime',
    FrontmatterImageBirthtime = 'frontmatter___image___birthtime',
    FrontmatterImageBirthtimeMs = 'frontmatter___image___birthtimeMs',
    FrontmatterImageBlksize = 'frontmatter___image___blksize',
    FrontmatterImageBlocks = 'frontmatter___image___blocks',
    FrontmatterImagePublicUrl = 'frontmatter___image___publicURL',
    FrontmatterImageChildImageSharpId = 'frontmatter___image___childImageSharp___id',
    FrontmatterImageChildImageSharpChildren = 'frontmatter___image___childImageSharp___children',
    FrontmatterImageId = 'frontmatter___image___id',
    FrontmatterImageParentId = 'frontmatter___image___parent___id',
    FrontmatterImageParentChildren = 'frontmatter___image___parent___children',
    FrontmatterImageChildren = 'frontmatter___image___children',
    FrontmatterImageChildrenId = 'frontmatter___image___children___id',
    FrontmatterImageChildrenChildren = 'frontmatter___image___children___children',
    FrontmatterImageInternalContent = 'frontmatter___image___internal___content',
    FrontmatterImageInternalContentDigest = 'frontmatter___image___internal___contentDigest',
    FrontmatterImageInternalDescription = 'frontmatter___image___internal___description',
    FrontmatterImageInternalFieldOwners = 'frontmatter___image___internal___fieldOwners',
    FrontmatterImageInternalIgnoreType = 'frontmatter___image___internal___ignoreType',
    FrontmatterImageInternalMediaType = 'frontmatter___image___internal___mediaType',
    FrontmatterImageInternalOwner = 'frontmatter___image___internal___owner',
    FrontmatterImageInternalType = 'frontmatter___image___internal___type',
    FrontmatterImageChildMarkdownRemarkId = 'frontmatter___image___childMarkdownRemark___id',
    FrontmatterImageChildMarkdownRemarkExcerpt = 'frontmatter___image___childMarkdownRemark___excerpt',
    FrontmatterImageChildMarkdownRemarkRawMarkdownBody = 'frontmatter___image___childMarkdownRemark___rawMarkdownBody',
    FrontmatterImageChildMarkdownRemarkFileAbsolutePath = 'frontmatter___image___childMarkdownRemark___fileAbsolutePath',
    FrontmatterImageChildMarkdownRemarkHtml = 'frontmatter___image___childMarkdownRemark___html',
    FrontmatterImageChildMarkdownRemarkHtmlAst = 'frontmatter___image___childMarkdownRemark___htmlAst',
    FrontmatterImageChildMarkdownRemarkExcerptAst = 'frontmatter___image___childMarkdownRemark___excerptAst',
    FrontmatterImageChildMarkdownRemarkHeadings = 'frontmatter___image___childMarkdownRemark___headings',
    FrontmatterImageChildMarkdownRemarkTimeToRead = 'frontmatter___image___childMarkdownRemark___timeToRead',
    FrontmatterImageChildMarkdownRemarkTableOfContents = 'frontmatter___image___childMarkdownRemark___tableOfContents',
    FrontmatterImageChildMarkdownRemarkChildren = 'frontmatter___image___childMarkdownRemark___children',
    Excerpt = 'excerpt',
    RawMarkdownBody = 'rawMarkdownBody',
    FileAbsolutePath = 'fileAbsolutePath',
    FieldsSlug = 'fields___slug',
    Html = 'html',
    HtmlAst = 'htmlAst',
    ExcerptAst = 'excerptAst',
    Headings = 'headings',
    HeadingsId = 'headings___id',
    HeadingsValue = 'headings___value',
    HeadingsDepth = 'headings___depth',
    TimeToRead = 'timeToRead',
    TableOfContents = 'tableOfContents',
    WordCountParagraphs = 'wordCount___paragraphs',
    WordCountSentences = 'wordCount___sentences',
    WordCountWords = 'wordCount___words',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
}

export enum SiteBuildMetadataFieldsEnum {
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    BuildTime = 'buildTime',
}

export enum SitePluginFieldsEnum {
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    Resolve = 'resolve',
    Name = 'name',
    Version = 'version',
    PluginOptionsPlugins = 'pluginOptions___plugins',
    PluginOptionsPluginsResolve = 'pluginOptions___plugins___resolve',
    PluginOptionsPluginsId = 'pluginOptions___plugins___id',
    PluginOptionsPluginsName = 'pluginOptions___plugins___name',
    PluginOptionsPluginsVersion = 'pluginOptions___plugins___version',
    PluginOptionsPluginsPluginOptionsName = 'pluginOptions___plugins___pluginOptions___name',
    PluginOptionsPluginsPluginOptionsStaticFolderName = 'pluginOptions___plugins___pluginOptions___staticFolderName',
    PluginOptionsPluginsPluginOptionsMaxWidth = 'pluginOptions___plugins___pluginOptions___maxWidth',
    PluginOptionsPluginsPluginOptionsLinkImagesToOriginal = 'pluginOptions___plugins___pluginOptions___linkImagesToOriginal',
    PluginOptionsPluginsNodeApIs = 'pluginOptions___plugins___nodeAPIs',
    PluginOptionsPluginsBrowserApIs = 'pluginOptions___plugins___browserAPIs',
    PluginOptionsPluginsPluginFilepath = 'pluginOptions___plugins___pluginFilepath',
    PluginOptionsName = 'pluginOptions___name',
    PluginOptionsPath = 'pluginOptions___path',
    PluginOptionsShortName = 'pluginOptions___short_name',
    PluginOptionsStartUrl = 'pluginOptions___start_url',
    PluginOptionsBackgroundColor = 'pluginOptions___background_color',
    PluginOptionsThemeColor = 'pluginOptions___theme_color',
    PluginOptionsDisplay = 'pluginOptions___display',
    PluginOptionsCacheBustingMode = 'pluginOptions___cache_busting_mode',
    PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
    PluginOptionsLegacy = 'pluginOptions___legacy',
    PluginOptionsThemeColorInHead = 'pluginOptions___theme_color_in_head',
    PluginOptionsStaticFolderName = 'pluginOptions___staticFolderName',
    PluginOptionsMaxWidth = 'pluginOptions___maxWidth',
    PluginOptionsLinkImagesToOriginal = 'pluginOptions___linkImagesToOriginal',
    PluginOptionsPathCheck = 'pluginOptions___pathCheck',
    NodeApIs = 'nodeAPIs',
    BrowserApIs = 'browserAPIs',
    SsrApIs = 'ssrAPIs',
    PluginFilepath = 'pluginFilepath',
    PackageJsonName = 'packageJson___name',
    PackageJsonDescription = 'packageJson___description',
    PackageJsonVersion = 'packageJson___version',
    PackageJsonMain = 'packageJson___main',
    PackageJsonAuthor = 'packageJson___author',
    PackageJsonLicense = 'packageJson___license',
    PackageJsonDependencies = 'packageJson___dependencies',
    PackageJsonDependenciesName = 'packageJson___dependencies___name',
    PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
    PackageJsonDevDependencies = 'packageJson___devDependencies',
    PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
    PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
    PackageJsonPeerDependencies = 'packageJson___peerDependencies',
    PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
    PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
    PackageJsonKeywords = 'packageJson___keywords',
}

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
export type Date = any;

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type Json = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Interfaces
// ====================================================

/** Node Interface */
export interface Node {
    id: string;

    parent?: Maybe<Node>;

    children: Node[];

    internal: Internal;
}

// ====================================================
// Types
// ====================================================

export interface Query {
    file?: Maybe<File>;

    allFile: FileConnection;

    directory?: Maybe<Directory>;

    allDirectory: DirectoryConnection;

    site?: Maybe<Site>;

    allSite: SiteConnection;

    sitePage?: Maybe<SitePage>;

    allSitePage: SitePageConnection;

    imageSharp?: Maybe<ImageSharp>;

    allImageSharp: ImageSharpConnection;

    markdownRemark?: Maybe<MarkdownRemark>;

    allMarkdownRemark: MarkdownRemarkConnection;

    siteBuildMetadata?: Maybe<SiteBuildMetadata>;

    allSiteBuildMetadata: SiteBuildMetadataConnection;

    sitePlugin?: Maybe<SitePlugin>;

    allSitePlugin: SitePluginConnection;
}

export interface File extends Node {
    sourceInstanceName: string;

    absolutePath: string;

    relativePath: string;

    extension: string;

    size: number;

    prettySize: string;

    modifiedTime: Date;

    accessTime: Date;

    changeTime: Date;

    birthTime: Date;

    root: string;

    dir: string;

    base: string;

    ext: string;

    name: string;

    relativeDirectory: string;

    dev: number;

    mode: number;

    nlink: number;

    uid: number;

    gid: number;

    rdev: number;

    ino: number;

    atimeMs: number;

    mtimeMs: number;

    ctimeMs: number;

    atime: Date;

    mtime: Date;

    ctime: Date;

    birthtime?: Maybe<Date>;

    birthtimeMs?: Maybe<number>;

    blksize?: Maybe<number>;

    blocks?: Maybe<number>;
    /** Copy file to static directory and return public url to it */
    publicURL?: Maybe<string>;

    childImageSharp?: Maybe<ImageSharp>;

    id: string;

    parent?: Maybe<Node>;

    children: Node[];

    internal: Internal;

    childMarkdownRemark?: Maybe<MarkdownRemark>;
}

export interface Internal {
    content?: Maybe<string>;

    contentDigest: string;

    description?: Maybe<string>;

    fieldOwners?: Maybe<Maybe<string>[]>;

    ignoreType?: Maybe<boolean>;

    mediaType?: Maybe<string>;

    owner: string;

    type: string;
}

export interface ImageSharp extends Node {
    fixed?: Maybe<ImageSharpFixed>;

    resolutions?: Maybe<ImageSharpResolutions>;

    fluid?: Maybe<ImageSharpFluid>;

    sizes?: Maybe<ImageSharpSizes>;

    original?: Maybe<ImageSharpOriginal>;

    resize?: Maybe<ImageSharpResize>;

    id: string;

    parent?: Maybe<Node>;

    children: Node[];

    internal: Internal;
}

export interface ImageSharpFixed {
    base64?: Maybe<string>;

    tracedSVG?: Maybe<string>;

    aspectRatio?: Maybe<number>;

    width: number;

    height: number;

    src: string;

    srcSet: string;

    srcWebp?: Maybe<string>;

    srcSetWebp?: Maybe<string>;

    originalName?: Maybe<string>;
}

export interface ImageSharpResolutions {
    base64?: Maybe<string>;

    tracedSVG?: Maybe<string>;

    aspectRatio?: Maybe<number>;

    width: number;

    height: number;

    src: string;

    srcSet: string;

    srcWebp?: Maybe<string>;

    srcSetWebp?: Maybe<string>;

    originalName?: Maybe<string>;
}

export interface ImageSharpFluid {
    base64?: Maybe<string>;

    tracedSVG?: Maybe<string>;

    aspectRatio: number;

    src: string;

    srcSet: string;

    srcWebp?: Maybe<string>;

    srcSetWebp?: Maybe<string>;

    sizes: string;

    originalImg?: Maybe<string>;

    originalName?: Maybe<string>;

    presentationWidth: number;

    presentationHeight: number;
}

export interface ImageSharpSizes {
    base64?: Maybe<string>;

    tracedSVG?: Maybe<string>;

    aspectRatio: number;

    src: string;

    srcSet: string;

    srcWebp?: Maybe<string>;

    srcSetWebp?: Maybe<string>;

    sizes: string;

    originalImg?: Maybe<string>;

    originalName?: Maybe<string>;

    presentationWidth: number;

    presentationHeight: number;
}

export interface ImageSharpOriginal {
    width?: Maybe<number>;

    height?: Maybe<number>;

    src?: Maybe<string>;
}

export interface ImageSharpResize {
    src?: Maybe<string>;

    tracedSVG?: Maybe<string>;

    width?: Maybe<number>;

    height?: Maybe<number>;

    aspectRatio?: Maybe<number>;

    originalName?: Maybe<string>;
}

export interface MarkdownRemark extends Node {
    id: string;

    frontmatter?: Maybe<MarkdownRemarkFrontmatter>;

    excerpt?: Maybe<string>;

    rawMarkdownBody?: Maybe<string>;

    fileAbsolutePath?: Maybe<string>;

    fields?: Maybe<MarkdownRemarkFields>;

    html?: Maybe<string>;

    htmlAst?: Maybe<Json>;

    excerptAst?: Maybe<Json>;

    headings?: Maybe<Maybe<MarkdownHeading>[]>;

    timeToRead?: Maybe<number>;

    tableOfContents?: Maybe<string>;

    wordCount?: Maybe<MarkdownWordCount>;

    parent?: Maybe<Node>;

    children: Node[];

    internal: Internal;
}

export interface MarkdownRemarkFrontmatter {
    date_timestamp?: string | number | Date;

    title?: Maybe<string>;

    date?: Maybe<Date>;

    description?: Maybe<string>;

    category?: Maybe<string>;

    background?: Maybe<string>;

    image?: Maybe<File>;
}

export interface MarkdownRemarkFields {
    slug?: Maybe<string>;
}

export interface MarkdownHeading {
    id?: Maybe<string>;

    value?: Maybe<string>;

    depth?: Maybe<number>;
}

export interface MarkdownWordCount {
    paragraphs?: Maybe<number>;

    sentences?: Maybe<number>;

    words?: Maybe<number>;
}

export interface FileConnection {
    totalCount: number;

    edges: FileEdge[];

    nodes: File[];

    pageInfo: PageInfo;

    distinct: string[];

    group: FileGroupConnection[];
}

export interface FileEdge {
    next?: Maybe<File>;

    node: File;

    previous?: Maybe<File>;
}

export interface PageInfo {
    currentPage: number;

    hasPreviousPage: boolean;

    hasNextPage: boolean;

    itemCount: number;

    pageCount: number;

    perPage?: Maybe<number>;

    totalCount: number;
}

export interface FileGroupConnection {
    totalCount: number;

    edges: FileEdge[];

    nodes: File[];

    pageInfo: PageInfo;

    field: string;

    fieldValue?: Maybe<string>;
}

export interface Directory extends Node {
    sourceInstanceName: string;

    absolutePath: string;

    relativePath: string;

    extension: string;

    size: number;

    prettySize: string;

    modifiedTime: Date;

    accessTime: Date;

    changeTime: Date;

    birthTime: Date;

    root: string;

    dir: string;

    base: string;

    ext: string;

    name: string;

    relativeDirectory: string;

    dev: number;

    mode: number;

    nlink: number;

    uid: number;

    gid: number;

    rdev: number;

    ino: number;

    atimeMs: number;

    mtimeMs: number;

    ctimeMs: number;

    atime: Date;

    mtime: Date;

    ctime: Date;

    birthtime?: Maybe<Date>;

    birthtimeMs?: Maybe<number>;

    blksize?: Maybe<number>;

    blocks?: Maybe<number>;

    id: string;

    parent?: Maybe<Node>;

    children: Node[];

    internal: Internal;
}

export interface DirectoryConnection {
    totalCount: number;

    edges: DirectoryEdge[];

    nodes: Directory[];

    pageInfo: PageInfo;

    distinct: string[];

    group: DirectoryGroupConnection[];
}

export interface DirectoryEdge {
    next?: Maybe<Directory>;

    node: Directory;

    previous?: Maybe<Directory>;
}

export interface DirectoryGroupConnection {
    totalCount: number;

    edges: DirectoryEdge[];

    nodes: Directory[];

    pageInfo: PageInfo;

    field: string;

    fieldValue?: Maybe<string>;
}

export interface Site extends Node {
    buildTime?: Maybe<Date>;

    siteMetadata?: Maybe<SiteSiteMetadata>;

    port?: Maybe<number>;

    host?: Maybe<string>;

    id: string;

    parent?: Maybe<Node>;

    children: Node[];

    internal: Internal;
}

export interface SiteSiteMetadata {
    title?: Maybe<string>;

    description?: Maybe<string>;

    position?: Maybe<string>;

    author?: Maybe<string>;
}

export interface SiteConnection {
    totalCount: number;

    edges: SiteEdge[];

    nodes: Site[];

    pageInfo: PageInfo;

    distinct: string[];

    group: SiteGroupConnection[];
}

export interface SiteEdge {
    next?: Maybe<Site>;

    node: Site;

    previous?: Maybe<Site>;
}

export interface SiteGroupConnection {
    totalCount: number;

    edges: SiteEdge[];

    nodes: Site[];

    pageInfo: PageInfo;

    field: string;

    fieldValue?: Maybe<string>;
}

export interface SitePage extends Node {
    path: string;

    component: string;

    internalComponentName: string;

    componentChunkName: string;

    matchPath?: Maybe<string>;

    isCreatedByStatefulCreatePages?: Maybe<boolean>;

    context?: Maybe<SitePageContext>;

    pluginCreator?: Maybe<SitePlugin>;

    pluginCreatorId?: Maybe<string>;

    componentPath?: Maybe<string>;

    id: string;

    parent?: Maybe<Node>;

    children: Node[];

    internal: Internal;
}

export interface SitePageContext {
    slug?: Maybe<string>;

    previousPost?: Maybe<SitePageContextPreviousPost>;

    nextPost?: Maybe<SitePageContextNextPost>;

    limit?: Maybe<number>;

    skip?: Maybe<number>;

    numPages?: Maybe<number>;

    currentPage?: Maybe<number>;
}

export interface SitePageContextPreviousPost {
    frontmatter?: Maybe<SitePageContextPreviousPostFrontmatter>;

    fields?: Maybe<SitePageContextPreviousPostFields>;
}

export interface SitePageContextPreviousPostFrontmatter {
    title?: Maybe<string>;
}

export interface SitePageContextPreviousPostFields {
    slug?: Maybe<string>;
}

export interface SitePageContextNextPost {
    frontmatter?: Maybe<SitePageContextNextPostFrontmatter>;

    fields?: Maybe<SitePageContextNextPostFields>;
}

export interface SitePageContextNextPostFrontmatter {
    title?: Maybe<string>;
}

export interface SitePageContextNextPostFields {
    slug?: Maybe<string>;
}

export interface SitePlugin extends Node {
    id: string;

    parent?: Maybe<Node>;

    children: Node[];

    internal: Internal;

    resolve?: Maybe<string>;

    name?: Maybe<string>;

    version?: Maybe<string>;

    pluginOptions?: Maybe<SitePluginPluginOptions>;

    nodeAPIs?: Maybe<Maybe<string>[]>;

    browserAPIs?: Maybe<Maybe<string>[]>;

    ssrAPIs?: Maybe<Maybe<string>[]>;

    pluginFilepath?: Maybe<string>;

    packageJson?: Maybe<SitePluginPackageJson>;
}

export interface SitePluginPluginOptions {
    plugins?: Maybe<Maybe<SitePluginPluginOptionsPlugins>[]>;

    name?: Maybe<string>;

    path?: Maybe<string>;

    short_name?: Maybe<string>;

    start_url?: Maybe<string>;

    background_color?: Maybe<string>;

    theme_color?: Maybe<string>;

    display?: Maybe<string>;

    cache_busting_mode?: Maybe<string>;

    include_favicon?: Maybe<boolean>;

    legacy?: Maybe<boolean>;

    theme_color_in_head?: Maybe<boolean>;

    staticFolderName?: Maybe<string>;

    maxWidth?: Maybe<number>;

    linkImagesToOriginal?: Maybe<boolean>;

    pathCheck?: Maybe<boolean>;
}

export interface SitePluginPluginOptionsPlugins {
    resolve?: Maybe<string>;

    id?: Maybe<string>;

    name?: Maybe<string>;

    version?: Maybe<string>;

    pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;

    nodeAPIs?: Maybe<Maybe<string>[]>;

    browserAPIs?: Maybe<Maybe<string>[]>;

    pluginFilepath?: Maybe<string>;
}

export interface SitePluginPluginOptionsPluginsPluginOptions {
    name?: Maybe<string>;

    staticFolderName?: Maybe<string>;

    maxWidth?: Maybe<number>;

    linkImagesToOriginal?: Maybe<boolean>;
}

export interface SitePluginPackageJson {
    name?: Maybe<string>;

    description?: Maybe<string>;

    version?: Maybe<string>;

    main?: Maybe<string>;

    author?: Maybe<string>;

    license?: Maybe<string>;

    dependencies?: Maybe<Maybe<SitePluginPackageJsonDependencies>[]>;

    devDependencies?: Maybe<Maybe<SitePluginPackageJsonDevDependencies>[]>;

    peerDependencies?: Maybe<Maybe<SitePluginPackageJsonPeerDependencies>[]>;

    keywords?: Maybe<Maybe<string>[]>;
}

export interface SitePluginPackageJsonDependencies {
    name?: Maybe<string>;

    version?: Maybe<string>;
}

export interface SitePluginPackageJsonDevDependencies {
    name?: Maybe<string>;

    version?: Maybe<string>;
}

export interface SitePluginPackageJsonPeerDependencies {
    name?: Maybe<string>;

    version?: Maybe<string>;
}

export interface SitePageConnection {
    totalCount: number;

    edges: SitePageEdge[];

    nodes: SitePage[];

    pageInfo: PageInfo;

    distinct: string[];

    group: SitePageGroupConnection[];
}

export interface SitePageEdge {
    next?: Maybe<SitePage>;

    node: SitePage;

    previous?: Maybe<SitePage>;
}

export interface SitePageGroupConnection {
    totalCount: number;

    edges: SitePageEdge[];

    nodes: SitePage[];

    pageInfo: PageInfo;

    field: string;

    fieldValue?: Maybe<string>;
}

export interface ImageSharpConnection {
    totalCount: number;

    edges: ImageSharpEdge[];

    nodes: ImageSharp[];

    pageInfo: PageInfo;

    distinct: string[];

    group: ImageSharpGroupConnection[];
}

export interface ImageSharpEdge {
    next?: Maybe<ImageSharp>;

    node: ImageSharp;

    previous?: Maybe<ImageSharp>;
}

export interface ImageSharpGroupConnection {
    totalCount: number;

    edges: ImageSharpEdge[];

    nodes: ImageSharp[];

    pageInfo: PageInfo;

    field: string;

    fieldValue?: Maybe<string>;
}

export interface MarkdownRemarkConnection {
    totalCount: number;

    edges: MarkdownRemarkEdge[];

    nodes: MarkdownRemark[];

    pageInfo: PageInfo;

    distinct: string[];

    group: MarkdownRemarkGroupConnection[];
}

export interface MarkdownRemarkEdge {
    next?: Maybe<MarkdownRemark>;

    node: MarkdownRemark;

    previous?: Maybe<MarkdownRemark>;
}

export interface MarkdownRemarkGroupConnection {
    totalCount: number;

    edges: MarkdownRemarkEdge[];

    nodes: MarkdownRemark[];

    pageInfo: PageInfo;

    field: string;

    fieldValue?: Maybe<string>;
}

export interface SiteBuildMetadata extends Node {
    id: string;

    parent?: Maybe<Node>;

    children: Node[];

    internal: Internal;

    buildTime?: Maybe<Date>;
}

export interface SiteBuildMetadataConnection {
    totalCount: number;

    edges: SiteBuildMetadataEdge[];

    nodes: SiteBuildMetadata[];

    pageInfo: PageInfo;

    distinct: string[];

    group: SiteBuildMetadataGroupConnection[];
}

export interface SiteBuildMetadataEdge {
    next?: Maybe<SiteBuildMetadata>;

    node: SiteBuildMetadata;

    previous?: Maybe<SiteBuildMetadata>;
}

export interface SiteBuildMetadataGroupConnection {
    totalCount: number;

    edges: SiteBuildMetadataEdge[];

    nodes: SiteBuildMetadata[];

    pageInfo: PageInfo;

    field: string;

    fieldValue?: Maybe<string>;
}

export interface SitePluginConnection {
    totalCount: number;

    edges: SitePluginEdge[];

    nodes: SitePlugin[];

    pageInfo: PageInfo;

    distinct: string[];

    group: SitePluginGroupConnection[];
}

export interface SitePluginEdge {
    next?: Maybe<SitePlugin>;

    node: SitePlugin;

    previous?: Maybe<SitePlugin>;
}

export interface SitePluginGroupConnection {
    totalCount: number;

    edges: SitePluginEdge[];

    nodes: SitePlugin[];

    pageInfo: PageInfo;

    field: string;

    fieldValue?: Maybe<string>;
}

// ====================================================
// Arguments
// ====================================================

export interface FileQueryArgs {
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;

    absolutePath?: Maybe<StringQueryOperatorInput>;

    relativePath?: Maybe<StringQueryOperatorInput>;

    extension?: Maybe<StringQueryOperatorInput>;

    size?: Maybe<IntQueryOperatorInput>;

    prettySize?: Maybe<StringQueryOperatorInput>;

    modifiedTime?: Maybe<DateQueryOperatorInput>;

    accessTime?: Maybe<DateQueryOperatorInput>;

    changeTime?: Maybe<DateQueryOperatorInput>;

    birthTime?: Maybe<DateQueryOperatorInput>;

    root?: Maybe<StringQueryOperatorInput>;

    dir?: Maybe<StringQueryOperatorInput>;

    base?: Maybe<StringQueryOperatorInput>;

    ext?: Maybe<StringQueryOperatorInput>;

    name?: Maybe<StringQueryOperatorInput>;

    relativeDirectory?: Maybe<StringQueryOperatorInput>;

    dev?: Maybe<IntQueryOperatorInput>;

    mode?: Maybe<IntQueryOperatorInput>;

    nlink?: Maybe<IntQueryOperatorInput>;

    uid?: Maybe<IntQueryOperatorInput>;

    gid?: Maybe<IntQueryOperatorInput>;

    rdev?: Maybe<IntQueryOperatorInput>;

    ino?: Maybe<FloatQueryOperatorInput>;

    atimeMs?: Maybe<FloatQueryOperatorInput>;

    mtimeMs?: Maybe<FloatQueryOperatorInput>;

    ctimeMs?: Maybe<FloatQueryOperatorInput>;

    atime?: Maybe<DateQueryOperatorInput>;

    mtime?: Maybe<DateQueryOperatorInput>;

    ctime?: Maybe<DateQueryOperatorInput>;

    birthtime?: Maybe<DateQueryOperatorInput>;

    birthtimeMs?: Maybe<FloatQueryOperatorInput>;

    blksize?: Maybe<IntQueryOperatorInput>;

    blocks?: Maybe<IntQueryOperatorInput>;

    publicURL?: Maybe<StringQueryOperatorInput>;

    childImageSharp?: Maybe<ImageSharpFilterInput>;

    id?: Maybe<StringQueryOperatorInput>;

    parent?: Maybe<NodeFilterInput>;

    children?: Maybe<NodeFilterListInput>;

    internal?: Maybe<InternalFilterInput>;

    childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
}
export interface AllFileQueryArgs {
    filter?: Maybe<FileFilterInput>;

    sort?: Maybe<FileSortInput>;

    skip?: Maybe<number>;

    limit?: Maybe<number>;
}
export interface DirectoryQueryArgs {
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;

    absolutePath?: Maybe<StringQueryOperatorInput>;

    relativePath?: Maybe<StringQueryOperatorInput>;

    extension?: Maybe<StringQueryOperatorInput>;

    size?: Maybe<IntQueryOperatorInput>;

    prettySize?: Maybe<StringQueryOperatorInput>;

    modifiedTime?: Maybe<DateQueryOperatorInput>;

    accessTime?: Maybe<DateQueryOperatorInput>;

    changeTime?: Maybe<DateQueryOperatorInput>;

    birthTime?: Maybe<DateQueryOperatorInput>;

    root?: Maybe<StringQueryOperatorInput>;

    dir?: Maybe<StringQueryOperatorInput>;

    base?: Maybe<StringQueryOperatorInput>;

    ext?: Maybe<StringQueryOperatorInput>;

    name?: Maybe<StringQueryOperatorInput>;

    relativeDirectory?: Maybe<StringQueryOperatorInput>;

    dev?: Maybe<IntQueryOperatorInput>;

    mode?: Maybe<IntQueryOperatorInput>;

    nlink?: Maybe<IntQueryOperatorInput>;

    uid?: Maybe<IntQueryOperatorInput>;

    gid?: Maybe<IntQueryOperatorInput>;

    rdev?: Maybe<IntQueryOperatorInput>;

    ino?: Maybe<FloatQueryOperatorInput>;

    atimeMs?: Maybe<FloatQueryOperatorInput>;

    mtimeMs?: Maybe<FloatQueryOperatorInput>;

    ctimeMs?: Maybe<FloatQueryOperatorInput>;

    atime?: Maybe<DateQueryOperatorInput>;

    mtime?: Maybe<DateQueryOperatorInput>;

    ctime?: Maybe<DateQueryOperatorInput>;

    birthtime?: Maybe<DateQueryOperatorInput>;

    birthtimeMs?: Maybe<FloatQueryOperatorInput>;

    blksize?: Maybe<IntQueryOperatorInput>;

    blocks?: Maybe<IntQueryOperatorInput>;

    id?: Maybe<StringQueryOperatorInput>;

    parent?: Maybe<NodeFilterInput>;

    children?: Maybe<NodeFilterListInput>;

    internal?: Maybe<InternalFilterInput>;
}
export interface AllDirectoryQueryArgs {
    filter?: Maybe<DirectoryFilterInput>;

    sort?: Maybe<DirectorySortInput>;

    skip?: Maybe<number>;

    limit?: Maybe<number>;
}
export interface SiteQueryArgs {
    buildTime?: Maybe<DateQueryOperatorInput>;

    siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;

    port?: Maybe<IntQueryOperatorInput>;

    host?: Maybe<StringQueryOperatorInput>;

    id?: Maybe<StringQueryOperatorInput>;

    parent?: Maybe<NodeFilterInput>;

    children?: Maybe<NodeFilterListInput>;

    internal?: Maybe<InternalFilterInput>;
}
export interface AllSiteQueryArgs {
    filter?: Maybe<SiteFilterInput>;

    sort?: Maybe<SiteSortInput>;

    skip?: Maybe<number>;

    limit?: Maybe<number>;
}
export interface SitePageQueryArgs {
    path?: Maybe<StringQueryOperatorInput>;

    component?: Maybe<StringQueryOperatorInput>;

    internalComponentName?: Maybe<StringQueryOperatorInput>;

    componentChunkName?: Maybe<StringQueryOperatorInput>;

    matchPath?: Maybe<StringQueryOperatorInput>;

    isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;

    context?: Maybe<SitePageContextFilterInput>;

    pluginCreator?: Maybe<SitePluginFilterInput>;

    pluginCreatorId?: Maybe<StringQueryOperatorInput>;

    componentPath?: Maybe<StringQueryOperatorInput>;

    id?: Maybe<StringQueryOperatorInput>;

    parent?: Maybe<NodeFilterInput>;

    children?: Maybe<NodeFilterListInput>;

    internal?: Maybe<InternalFilterInput>;
}
export interface AllSitePageQueryArgs {
    filter?: Maybe<SitePageFilterInput>;

    sort?: Maybe<SitePageSortInput>;

    skip?: Maybe<number>;

    limit?: Maybe<number>;
}
export interface ImageSharpQueryArgs {
    fixed?: Maybe<ImageSharpFixedFilterInput>;

    resolutions?: Maybe<ImageSharpResolutionsFilterInput>;

    fluid?: Maybe<ImageSharpFluidFilterInput>;

    sizes?: Maybe<ImageSharpSizesFilterInput>;

    original?: Maybe<ImageSharpOriginalFilterInput>;

    resize?: Maybe<ImageSharpResizeFilterInput>;

    id?: Maybe<StringQueryOperatorInput>;

    parent?: Maybe<NodeFilterInput>;

    children?: Maybe<NodeFilterListInput>;

    internal?: Maybe<InternalFilterInput>;
}
export interface AllImageSharpQueryArgs {
    filter?: Maybe<ImageSharpFilterInput>;

    sort?: Maybe<ImageSharpSortInput>;

    skip?: Maybe<number>;

    limit?: Maybe<number>;
}
export interface MarkdownRemarkQueryArgs {
    id?: Maybe<StringQueryOperatorInput>;

    frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;

    excerpt?: Maybe<StringQueryOperatorInput>;

    rawMarkdownBody?: Maybe<StringQueryOperatorInput>;

    fileAbsolutePath?: Maybe<StringQueryOperatorInput>;

    fields?: Maybe<MarkdownRemarkFieldsFilterInput>;

    html?: Maybe<StringQueryOperatorInput>;

    htmlAst?: Maybe<JsonQueryOperatorInput>;

    excerptAst?: Maybe<JsonQueryOperatorInput>;

    headings?: Maybe<MarkdownHeadingFilterListInput>;

    timeToRead?: Maybe<IntQueryOperatorInput>;

    tableOfContents?: Maybe<StringQueryOperatorInput>;

    wordCount?: Maybe<MarkdownWordCountFilterInput>;

    parent?: Maybe<NodeFilterInput>;

    children?: Maybe<NodeFilterListInput>;

    internal?: Maybe<InternalFilterInput>;
}
export interface AllMarkdownRemarkQueryArgs {
    filter?: Maybe<MarkdownRemarkFilterInput>;

    sort?: Maybe<MarkdownRemarkSortInput>;

    skip?: Maybe<number>;

    limit?: Maybe<number>;
}
export interface SiteBuildMetadataQueryArgs {
    id?: Maybe<StringQueryOperatorInput>;

    parent?: Maybe<NodeFilterInput>;

    children?: Maybe<NodeFilterListInput>;

    internal?: Maybe<InternalFilterInput>;

    buildTime?: Maybe<DateQueryOperatorInput>;
}
export interface AllSiteBuildMetadataQueryArgs {
    filter?: Maybe<SiteBuildMetadataFilterInput>;

    sort?: Maybe<SiteBuildMetadataSortInput>;

    skip?: Maybe<number>;

    limit?: Maybe<number>;
}
export interface SitePluginQueryArgs {
    id?: Maybe<StringQueryOperatorInput>;

    parent?: Maybe<NodeFilterInput>;

    children?: Maybe<NodeFilterListInput>;

    internal?: Maybe<InternalFilterInput>;

    resolve?: Maybe<StringQueryOperatorInput>;

    name?: Maybe<StringQueryOperatorInput>;

    version?: Maybe<StringQueryOperatorInput>;

    pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;

    nodeAPIs?: Maybe<StringQueryOperatorInput>;

    browserAPIs?: Maybe<StringQueryOperatorInput>;

    ssrAPIs?: Maybe<StringQueryOperatorInput>;

    pluginFilepath?: Maybe<StringQueryOperatorInput>;

    packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
}
export interface AllSitePluginQueryArgs {
    filter?: Maybe<SitePluginFilterInput>;

    sort?: Maybe<SitePluginSortInput>;

    skip?: Maybe<number>;

    limit?: Maybe<number>;
}
export interface ModifiedTimeFileArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface AccessTimeFileArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface ChangeTimeFileArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface BirthTimeFileArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface AtimeFileArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface MtimeFileArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface CtimeFileArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface FixedImageSharpArgs {
    width?: Maybe<number>;

    height?: Maybe<number>;

    base64Width?: Maybe<number>;

    jpegProgressive?: boolean;

    pngCompressionSpeed?: number;

    grayscale?: boolean;

    duotone?: Maybe<DuotoneGradient>;

    traceSVG?: Maybe<Potrace>;

    quality?: Maybe<number>;

    jpegQuality?: Maybe<number>;

    pngQuality?: Maybe<number>;

    webpQuality?: Maybe<number>;

    toFormat?: ImageFormat;

    toFormatBase64?: ImageFormat;

    cropFocus?: ImageCropFocus;

    fit?: ImageFit;

    background?: string;

    rotate?: number;

    trim?: number;
}
export interface ResolutionsImageSharpArgs {
    width?: Maybe<number>;

    height?: Maybe<number>;

    base64Width?: Maybe<number>;

    jpegProgressive?: boolean;

    pngCompressionSpeed?: number;

    grayscale?: boolean;

    duotone?: Maybe<DuotoneGradient>;

    traceSVG?: Maybe<Potrace>;

    quality?: Maybe<number>;

    jpegQuality?: Maybe<number>;

    pngQuality?: Maybe<number>;

    webpQuality?: Maybe<number>;

    toFormat?: ImageFormat;

    toFormatBase64?: ImageFormat;

    cropFocus?: ImageCropFocus;

    fit?: ImageFit;

    background?: string;

    rotate?: number;

    trim?: number;
}
export interface FluidImageSharpArgs {
    maxWidth?: Maybe<number>;

    maxHeight?: Maybe<number>;

    base64Width?: Maybe<number>;

    grayscale?: boolean;

    jpegProgressive?: boolean;

    pngCompressionSpeed?: number;

    duotone?: Maybe<DuotoneGradient>;

    traceSVG?: Maybe<Potrace>;

    quality?: Maybe<number>;

    jpegQuality?: Maybe<number>;

    pngQuality?: Maybe<number>;

    webpQuality?: Maybe<number>;

    toFormat?: ImageFormat;

    toFormatBase64?: ImageFormat;

    cropFocus?: ImageCropFocus;

    fit?: ImageFit;

    background?: string;

    rotate?: number;

    trim?: number;

    sizes?: string;
    /** A list of image widths to be generated. Example: [ 200, 340, 520, 890 ] */
    srcSetBreakpoints?: Maybe<number>[];
}
export interface SizesImageSharpArgs {
    maxWidth?: Maybe<number>;

    maxHeight?: Maybe<number>;

    base64Width?: Maybe<number>;

    grayscale?: boolean;

    jpegProgressive?: boolean;

    pngCompressionSpeed?: number;

    duotone?: Maybe<DuotoneGradient>;

    traceSVG?: Maybe<Potrace>;

    quality?: Maybe<number>;

    jpegQuality?: Maybe<number>;

    pngQuality?: Maybe<number>;

    webpQuality?: Maybe<number>;

    toFormat?: ImageFormat;

    toFormatBase64?: ImageFormat;

    cropFocus?: ImageCropFocus;

    fit?: ImageFit;

    background?: string;

    rotate?: number;

    trim?: number;

    sizes?: string;
    /** A list of image widths to be generated. Example: [ 200, 340, 520, 890 ] */
    srcSetBreakpoints?: Maybe<number>[];
}
export interface ResizeImageSharpArgs {
    width?: Maybe<number>;

    height?: Maybe<number>;

    quality?: Maybe<number>;

    jpegQuality?: Maybe<number>;

    pngQuality?: Maybe<number>;

    webpQuality?: Maybe<number>;

    jpegProgressive?: boolean;

    pngCompressionLevel?: number;

    pngCompressionSpeed?: number;

    grayscale?: boolean;

    duotone?: Maybe<DuotoneGradient>;

    base64?: boolean;

    traceSVG?: Maybe<Potrace>;

    toFormat?: ImageFormat;

    cropFocus?: ImageCropFocus;

    fit?: ImageFit;

    background?: string;

    rotate?: number;

    trim?: number;
}
export interface ExcerptMarkdownRemarkArgs {
    pruneLength?: number;

    truncate?: boolean;

    format?: MarkdownExcerptFormats;
}
export interface ExcerptAstMarkdownRemarkArgs {
    pruneLength?: number;

    truncate?: boolean;
}
export interface HeadingsMarkdownRemarkArgs {
    depth?: Maybe<MarkdownHeadingLevels>;
}
export interface TableOfContentsMarkdownRemarkArgs {
    absolute?: boolean;

    pathToSlugField?: string;

    maxDepth?: Maybe<number>;

    heading?: Maybe<string>;
}
export interface DateMarkdownRemarkFrontmatterArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface DistinctFileConnectionArgs {
    field: FileFieldsEnum;
}
export interface GroupFileConnectionArgs {
    skip?: Maybe<number>;

    limit?: Maybe<number>;

    field: FileFieldsEnum;
}
export interface ModifiedTimeDirectoryArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface AccessTimeDirectoryArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface ChangeTimeDirectoryArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface BirthTimeDirectoryArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface AtimeDirectoryArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface MtimeDirectoryArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface CtimeDirectoryArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface DistinctDirectoryConnectionArgs {
    field: DirectoryFieldsEnum;
}
export interface GroupDirectoryConnectionArgs {
    skip?: Maybe<number>;

    limit?: Maybe<number>;

    field: DirectoryFieldsEnum;
}
export interface BuildTimeSiteArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface DistinctSiteConnectionArgs {
    field: SiteFieldsEnum;
}
export interface GroupSiteConnectionArgs {
    skip?: Maybe<number>;

    limit?: Maybe<number>;

    field: SiteFieldsEnum;
}
export interface DistinctSitePageConnectionArgs {
    field: SitePageFieldsEnum;
}
export interface GroupSitePageConnectionArgs {
    skip?: Maybe<number>;

    limit?: Maybe<number>;

    field: SitePageFieldsEnum;
}
export interface DistinctImageSharpConnectionArgs {
    field: ImageSharpFieldsEnum;
}
export interface GroupImageSharpConnectionArgs {
    skip?: Maybe<number>;

    limit?: Maybe<number>;

    field: ImageSharpFieldsEnum;
}
export interface DistinctMarkdownRemarkConnectionArgs {
    field: MarkdownRemarkFieldsEnum;
}
export interface GroupMarkdownRemarkConnectionArgs {
    skip?: Maybe<number>;

    limit?: Maybe<number>;

    field: MarkdownRemarkFieldsEnum;
}
export interface BuildTimeSiteBuildMetadataArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface DistinctSiteBuildMetadataConnectionArgs {
    field: SiteBuildMetadataFieldsEnum;
}
export interface GroupSiteBuildMetadataConnectionArgs {
    skip?: Maybe<number>;

    limit?: Maybe<number>;

    field: SiteBuildMetadataFieldsEnum;
}
export interface DistinctSitePluginConnectionArgs {
    field: SitePluginFieldsEnum;
}
export interface GroupSitePluginConnectionArgs {
    skip?: Maybe<number>;

    limit?: Maybe<number>;

    field: SitePluginFieldsEnum;
}

export interface IntrospectionResultData {
    __schema: {
        types: {
            kind: string;
            name: string;
            possibleTypes: {
                name: string;
            }[];
        }[];
    };
}

const result: IntrospectionResultData = {
    __schema: {
        types: [
            {
                kind: 'INTERFACE',
                name: 'Node',
                possibleTypes: [
                    {
                        name: 'File',
                    },
                    {
                        name: 'ImageSharp',
                    },
                    {
                        name: 'MarkdownRemark',
                    },
                    {
                        name: 'Directory',
                    },
                    {
                        name: 'Site',
                    },
                    {
                        name: 'SitePage',
                    },
                    {
                        name: 'SitePlugin',
                    },
                    {
                        name: 'SiteBuildMetadata',
                    },
                ],
            },
        ],
    },
};

export default result;
