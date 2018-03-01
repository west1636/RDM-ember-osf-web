/* tslint:disable:object-literal-sort-keys max-line-length */

export default {
    general: {
        share: '共有',
        embed: '埋込み',
        download: 'ダウンロード',
        delete: '削除',
        view: '表示',
        edit: '編集',
        cancel: 'キャンセル',
        revisions: '修正',
        md5: 'MD5',
        date: '日付',
        sha2: 'SHA2',
        title: 'タイトル',
        contributors: '共同研究者',
        modified: '編集',
        description: '説明',
        create: '作成',
        and: 'and',
        more: '詳細',
        clipboard_copy: 'Copy to clipboard',
        sort_asc: 'Sort ascending',
        sort_desc: 'Sort descending',
        next: 'next',
        previous: 'previous',
    },
    quickfiles: {
        title: '{{user-name}} のクイックファイル',
        description: 'ここにアップロードされたファイルは<b>一般公開</b>されており、共有リンクを使用して他のユーザーと簡単に共有できます。',
        feedback_dialog_text: 'クイックファイルの考え方を我々に教えて下さい',
        transition_auth: 'クイックファイルを表示するには、ログインしている必要があります。ログインページにリダイレクトします。',
    },
    feedback: {
        button_text: 'フィードバック',
        placeholder: 'フィードバックをシェア',
        follow_up_label: 'OSFを改良するため、また機会があれば我々に連絡して下さい。',
        title: 'フィードバックの送信',
        confirm_button_text: '送信',
        thank_you: 'ありがとうございます',
        success: 'あなたからのフィードバックは提出されました',
        dismiss: '了解',
    },
    file_detail: {
        version: {
            id: 'バージョンID',
            title: '(バージョン: {{version-number}})',
        },
        embed: {
            dynamic: 'JavaScriptを用いたダイレクトレンダーiframe',
            direct: '高さと幅を固定したダイレクトiframe',
        },
        tags: 'タグ:',
        toggle: 'トグルビュー:',
        delete_file: {
            question: 'ファイルを削除しますか？',
            confirm: '本当に <b>{{file-name}}</b> を削除してもよろしいでしょうか？',
        },
        sha2_description: 'SHA-2は、データの完全性を検証するために使用されるNSAによって設計された暗号ハッシュ関数です。',
        md5_description: 'MD5は、データの完全性を検証するために使用されるアルゴリズムです。',
        // toast messages
        delete_success: 'ファイルが削除されました',
        delete_fail: 'エラー、ファイルを削除できません',
        save_success: 'ファイルが保存されました',
        save_fail: 'エラー、ファイルを保存できません',
        mfr_iframe_title: 'Rendering of document',
        add_tag: 'add a tag to enhance discoverability',
    },
    file_browser: {
        loading: 'Loading...',
        delete_multiple: 'Delete multiple',
        download_zip: 'Download as zip',
        drop_placeholder: 'Drop files here to upload',
        drop_reminder: 'Drop file to upload',
        no_files: 'This user has not uploaded any quickfiles',
        share_title: 'Share',
        clipboard_copy: 'Copy to clipboard',
        info: {
            title: 'How to use the file browser',
            upload: '<b>Upload:</b> Single file uploads via drag and drop or by clicking the upload button.',
            select: '<b>Select rows:</b> Click on a row to show further actions in the toolbar. Use Command or Shift keys to select multiple files.',
            folders: '<b>Folders:</b> Not supported; consider an OSF project for uploading and managing many files.',
            open1: '<b>Open files:</b> Click a file name to go to view the file in the OSF.',
            open2: '<b>Open files in new tab:</b> Press Command (Ctrl in Windows) and click a file name to open it in a new tab.',
            download: '<b>Download as zip:</b> Click the Download as Zip button in the toolbar to download all files as a .zip.',
        },
        delete_modal: {
            title: 'Delete "{{selectedItems.firstObject.itemName}}"?',
            title_multiple: 'Delete multiple?',
            body: 'This action is irreversible',
        },
        conflict_modal: {
            title: 'An item named {{textValue}} already exists in this location.',
            keep_info: '"Keep both" will retain both files (and their version histories) in this location.',
            replace_info: '"Replace" will overwrite the existing file in this location. You will lose previous versions of the overwritten file. You will keep previous versions of the moved file.',
            keep_button: 'Keep both',
            replace_button: 'Replace',
        },
        move_modal: {
            title: 'Move file to project',
            move_button: 'Move file',
        },

    },
    dashboard: {
        title: 'ダッシュボード',
        create_new_project_button: '新規プロジェクト作成',
        quicksearch: {
            search: 'マイプロジェクト内の検索',
            other_links: 'あなたの仕事を整理したり、OSFを<a href="/search/">検索</a>するには、<a href="/myprojects/">My Projects</a>に行きます。',
            no_results: 'プロジェクトが見つかりません！',
            no_projects: {
                line1: 'まだプロジェクトがありません。画面右上のボタンからプロジェクトを作成して下さい。',
                line2: 'この機能を使用すると、プロジェクトを検索してすばやくアクセスできます。',
                preview_alt: 'クイックプロジェクトの全画面プレビュー',
            },
            private_parent: '非公開プロジェクト / ',
            private_grandparent: '非公開プロジェクト / 非公開 / ',
        },
        noteworthy: {
            description: '公開プロジェクトの検索',
            new_and_noteworthy: '新着と注目',
            failed_noteworthy: '"新着と注目"プロジェクトのローディングに失敗しました。',
            most_popular: '最人気',
            failed_popular: '"最人気"プロジェクトのローディングに失敗しました。',
            search_more: '更にプロジェクトを探す',
            by: 'by',
        },
        meetings: {
            title: '学会や研究会をホスティングしますか？',
            description: 'OSF for Meetings サービスを使用し、学術集会への投稿するためのポータルを提供します。',
            button: '学術集会の表示',
        },
        preprints: {
            title: '最新の研究を閲覧',
            description: 'さまざまな研究分野をカバーするOSFで、ホストされている最新のプレプリントをご覧ください。',
            button: 'プレプリントの表示',
        },
    },
    new_project: {
        header: '新規プロジェクト作成',
        title_placeholder: 'プロジェクトタイトルの入力',
        more: 'More',
        affiliation: '所属',
        remove_all: '全件削除',
        select_all: '全件選択',
        no_matches: '一致しません',
        description_placeholder: 'プロジェクト説明の入力',
        template_title: 'テンプレート（オプション）',
        template_search_help: 'プロジェクトを検索するタイピングの開始。テンプレートとしてプロジェクトを選択すると、そのプロジェクトの内容をインポートせずにその構造が新しいプロジェクトに複製されます。',
        template_placeholder: 'テンプレートとして使用するプロジェクトを選択する',
        success_message: '新規プロジェクトの作成に成功しました',
        stay_here: 'この場に留まる',
        go_to_new: '作成したプロジェクトへ移動',
    },
    banners: {
        prereg: {
            description: 'あなたの次の研究を改善してください。 Prereg Challengeに参加すれば$ 1,000を獲得できます。',
            button: 'Prereg Challengeをはじめる',
        },
    },
};
